import fetch from 'node-fetch';

const request = require('supertest');
const app = require('../app');


describe('Testy API', () => {
  it('GET /products powinien zwrócić listę produktów', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('price');
  });

  it('GET /products/:id powinien zwrócić pojedynczy produkt', async () => {
    const productId = 1;
    const response = await request(app).get(`/products/${productId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', productId);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('price');
  });

  it('GET /products/:id powinien zwrócić 404 dla nieistniejącego produktu', async () => {
    const productId = 999;
    const response = await request(app).get(`/products/${productId}`);
    expect(response.status).toBe(404);
  });

  it('POST /payments powinien przyjąć poprawne dane płatności', async () => {
    const paymentData = {
      name: 'Jan Kowalski',
      cardNumber: '1234567890123456',
      expirationDate: '12/23',
      cvv: '123'
    };
    const response = await request(app)
      .post('/payments')
      .send(paymentData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('success', true);
  });

  it('POST /payments powinien zwrócić 400 dla niepoprawnych danych płatności', async () => {
    const paymentData = {
      name: '',
      cardNumber: '123',
      expirationDate: '12/20',
      cvv: 'abc'
    };
    const response = await request(app)
      .post('/payments')
      .send(paymentData);
    expect(response.status).toBe(400);
  });
});
