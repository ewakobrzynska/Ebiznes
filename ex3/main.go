package main

import (
	"github.com/labstack/echo/v4"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
    "net/http"
)

type Product struct {
	gorm.Model
	Name  string `json:"name"`
	Price int    `json:"price"`
}

var db *gorm.DB

func initDB() {
	database, err := gorm.Open(sqlite.Open("products.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}

	database.AutoMigrate(&Product{})

	// Dodajemy kilka przykładowych produktów
	database.Create(&Product{Name: "Produkt 1", Price: 100})
	database.Create(&Product{Name: "Produkt 2", Price: 200})
	database.Create(&Product{Name: "Produkt 3", Price: 300})

	db = database
}


func main() {
	initDB()

	e := echo.New()

	// Routes for Product controller
	e.GET("/products", getAllProducts)
	e.GET("/products/:id", getProductByID)
	e.POST("/products", createProduct)
	e.PUT("/products/:id", updateProduct)
	e.DELETE("/products/:id", deleteProduct)

	e.Logger.Fatal(e.Start(":8080"))

    e.GET("/", func(c echo.Context) error {
        return c.String(http.StatusOK, "Witaj! Aby zobaczyć wszystkie produkty, odwiedź /products.")
    })
    
}

func getAllProducts(c echo.Context) error {
	var products []Product
	db.Find(&products)
	return c.JSON(http.StatusOK, products)
}

func getProductByID(c echo.Context) error {
	id := c.Param("id")
	var product Product
	if err := db.First(&product, id).Error; err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "Product not found")
	}
	return c.JSON(http.StatusOK, product)
}

func createProduct(c echo.Context) error {
	product := new(Product)
	if err := c.Bind(product); err != nil {
		return err
	}
	db.Create(product)
	return c.JSON(http.StatusCreated, product)
}

func updateProduct(c echo.Context) error {
	id := c.Param("id")
	product := new(Product)
	if err := c.Bind(product); err != nil {
		return err
	}
	db.Model(&Product{}).Where("id = ?", id).Updates(product)
	return c.NoContent(http.StatusOK)
}

func deleteProduct(c echo.Context) error {
	id := c.Param("id")
	db.Delete(&Product{}, id)
	return c.NoContent(http.StatusNoContent)
}

