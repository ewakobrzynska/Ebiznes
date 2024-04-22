package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Product struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Price int    `json:"price"`
}

var products = []Product{
	{1, "Produkt 1", 50},
	{2, "Produkt 2", 100},
	{3, "Produkt 3", 150},
	{4, "Film 1", 20},
	{5, "Film 2", 25},
	{6, "Film 3", 30},
}

func handleProducts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*") // Ustawienie nagłówka CORS
	json.NewEncoder(w).Encode(products)
}

func handlePayments(w http.ResponseWriter, r *http.Request) {
	// Obsługa płatności...
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*") // Ustawienie nagłówka CORS
	json.NewEncoder(w).Encode(map[string]string{"message": "Payment processed successfully"})
}

func main() {
	http.HandleFunc("/products", handleProducts)
	http.HandleFunc("/payments", handlePayments)
	log.Fatal(http.ListenAndServe(":3000", nil))
}
