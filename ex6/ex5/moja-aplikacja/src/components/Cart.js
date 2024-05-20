import React from 'react';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <h2>Koszyk</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => removeFromCart(item.id)}>Usuń {item.name}</button>
          </li>
        ))}
        {/* Render the "Wyczyść koszyk" button only when there are items in the cart */}
        {cart.length > 0 && <button onClick={() => setCart([])}>Wyczyść koszyk</button>}
      </ul>
    </div>
  );
};

export default Cart;
