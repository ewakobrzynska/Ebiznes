package main

import (
    "net/http"
    "strconv"
    "encoding/json"

    "github.com/labstack/echo/v4"
)

type Product struct {
    ID    int    `json:"id"`
    Name  string `json:"name"`
    Price int    `json:"price"`
}

var products = []Product{
    {ID: 1, Name: "Product 1", Price: 100},
    {ID: 2, Name: "Product 2", Price: 200},
}

func getAllProducts(c echo.Context) error {
    prettyProducts, err := json.MarshalIndent(products, "", "  ")
    if err != nil {
        return err
    }

    c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSONCharsetUTF8)
    c.Response().Write(prettyProducts)
    return nil
}

func getProductByID(c echo.Context) error {
    id, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        return err
    }

    for _, p := range products {
        if p.ID == id {
            return c.JSON(http.StatusOK, p)
        }
    }

    return echo.NewHTTPError(http.StatusNotFound, "Product not found")
}

func createProduct(c echo.Context) error {
    var product Product
    if err := c.Bind(&product); err != nil {
        return err
    }

    products = append(products, product)
    return c.JSON(http.StatusCreated, product)
}

func updateProduct(c echo.Context) error {
    id, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        return err
    }

    var updatedProduct Product
    if err := c.Bind(&updatedProduct); err != nil {
        return err
    }

    for i, p := range products {
        if p.ID == id {
            products[i] = updatedProduct
            return c.JSON(http.StatusOK, updatedProduct)
        }
    }

    return echo.NewHTTPError(http.StatusNotFound, "Product not found")
}

func deleteProduct(c echo.Context) error {
    id, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        return err
    }

    for i, p := range products {
        if p.ID == id {
            products = append(products[:i], products[i+1:]...)
            return c.NoContent(http.StatusNoContent)
        }
    }

    return echo.NewHTTPError(http.StatusNotFound, "Product not found")
}

func main() {
    e := echo.New()

    // Routes for Product controller
    e.GET("/products", getAllProducts)
    e.GET("/products/:id", getProductByID)
    e.POST("/products", createProduct)
    e.PUT("/products/:id", updateProduct)
    e.DELETE("/products/:id", deleteProduct)

    e.Logger.Fatal(e.Start(":8080"))
}
