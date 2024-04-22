import React, { useState, useEffect } from 'react';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Lista Produktów</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleAddToCart(product)}>Dodaj do koszyka</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
