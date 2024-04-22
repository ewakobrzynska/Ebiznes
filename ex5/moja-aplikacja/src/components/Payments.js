import React, { useState } from 'react';

const Payments = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Placeholder for payment processing logic
  };

  return (
    <div>
      <h2>Płatności</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imię i nazwisko:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Numer karty:</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
        </div>
        <div>
          <label>Data ważności:</label>
          <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
        </div>
        <div>
          <label>CVV:</label>
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} />
        </div>
        <button type="submit">Zapłać</button>
      </form>
    </div>
  );
};

export default Payments;
