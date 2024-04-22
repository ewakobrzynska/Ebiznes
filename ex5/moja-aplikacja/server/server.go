package main

import (
	"encoding/json"
	"log"
	"net/http"
	"fmt"
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

type Payment struct {
	Name           string `json:"name"`
	CardNumber     string `json:"cardNumber"`
	ExpirationDate string `json:"expirationDate"`
	CVV            string `json:"cvv"`
}

func handleOptions(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3001")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.WriteHeader(http.StatusOK)
}


func handlePayments(w http.ResponseWriter, r *http.Request) {
    if r.Method == "OPTIONS" {
        handleOptions(w, r)
        return
    }

    var payment Payment
    if err := json.NewDecoder(r.Body).Decode(&payment); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    responseData := map[string]string{"message": "Payment processed successfully", "data": fmt.Sprintf("%+v", payment)}
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3001")
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(responseData)
}


func main() {
	http.HandleFunc("/products", handleProducts)
	http.HandleFunc("/payments", handlePayments)
	log.Fatal(http.ListenAndServe(":3000", nil))
}
