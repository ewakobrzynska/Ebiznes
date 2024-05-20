import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Payments from '../src/components/Payments';

describe('Payments Component', () => {
  beforeEach(() => {
    render(<Payments />);
  });

  it('should render the payments title', () => {
    expect(screen.getByText('Płatności')).toBeInTheDocument();
  });

  it('should render form inputs with labels', () => {
    expect(screen.getByLabelText('Imię i nazwisko:')).toBeInTheDocument();
    expect(screen.getByLabelText('Numer karty:')).toBeInTheDocument();
    expect(screen.getByLabelText('Data ważności:')).toBeInTheDocument();
    expect(screen.getByLabelText('CVV:')).toBeInTheDocument();
  });

  it('should update form state when input values change', () => {
    fireEvent.change(screen.getByLabelText('Imię i nazwisko:'), { target: { value: 'Jan Kowalski' } });
    expect(screen.getByLabelText('Imię i nazwisko:')).toHaveValue('Jan Kowalski');
  });

  it('should submit form with correct data', async () => {
    const nameInput = screen.getByLabelText('Imię i nazwisko:');
    const cardNumberInput = screen.getByLabelText('Numer karty:');
    const expirationDateInput = screen.getByLabelText('Data ważności:');
    const cvvInput = screen.getByLabelText('CVV:');
    fireEvent.change(nameInput, { target: { value: 'Jan Kowalski' } });
    fireEvent.change(cardNumberInput, { target: { value: '1234567890123456' } });
    fireEvent.change(expirationDateInput, { target: { value: '12/24' } });
    fireEvent.change(cvvInput, { target: { value: '123' } });
    fireEvent.submit(screen.getByRole('button', { name: /Zapłać/i }));
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Jan Kowalski',
          cardNumber: '1234567890123456',
          expirationDate: '12/24',
          cvv: '123'
        })
      });
    });
  });

  it('should reset form state after submission', async () => {
    const nameInput = screen.getByLabelText('Imię i nazwisko:');
    const cardNumberInput = screen.getByLabelText('Numer karty:');
    const expirationDateInput = screen.getByLabelText('Data ważności:');
    const cvvInput = screen.getByLabelText('CVV:');
    fireEvent.change(nameInput, { target: { value: 'Jan Kowalski' } });
    fireEvent.change(cardNumberInput, { target: { value: '1234567890123456' } });
    fireEvent.change(expirationDateInput, { target: { value: '12/24' } });
    fireEvent.change(cvvInput, { target: { value: '123' } });
    fireEvent.submit(screen.getByRole('button', { name: /Zapłać/i }));
    await waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(cardNumberInput).toHaveValue('');
      expect(expirationDateInput).toHaveValue('');
      expect(cvvInput).toHaveValue('');
    });
  });
});
