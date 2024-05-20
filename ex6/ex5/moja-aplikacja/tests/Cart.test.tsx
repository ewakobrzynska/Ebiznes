import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from '../src/components/Cart';

describe('Cart Component', () => {
  const cartItems = [
    { id: 1, name: 'Produkt 1', price: '10.00' },
    { id: 2, name: 'Produkt 2', price: '20.00' }
  ];

  let setCartMock;

  beforeEach(() => {
    setCartMock = jest.fn();
    render(<Cart cart={cartItems} setCart={setCartMock} />);
  });

  it('should render the cart title', () => {
    expect(screen.getByText('Koszyk')).toBeInTheDocument();
  });

  it('should render all items in the cart', () => {
    cartItems.forEach(item => {
      expect(screen.getByText(new RegExp(item.name, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(item.price, 'i'))).toBeInTheDocument();
      expect(screen.getByRole('button', { name: new RegExp(`Usuń ${item.name}`, 'i') })).toBeInTheDocument();
    });
  });
  

  it('should render remove buttons for each item', () => {
    cartItems.forEach(item => {
      expect(screen.getByRole('button', { name: new RegExp(`Usuń ${item.name}`, 'i') })).toBeInTheDocument();
    });
  });
  

  it('should call setCart with the correct arguments when removing an item', () => {
    const removeButtons = screen.getAllByText('Usuń');
    fireEvent.click(removeButtons[0]);
    expect(setCartMock).toHaveBeenCalledWith(cartItems.filter(item => item.id !== 1));
    fireEvent.click(removeButtons[1]);
    expect(setCartMock).toHaveBeenCalledWith(cartItems.filter(item => item.id !== 2));
  });

  it('should update the cart when an item is removed', () => {
    fireEvent.click(screen.getAllByText('Usuń')[0]);
    expect(screen.queryByText('Produkt 1')).not.toBeInTheDocument();
    expect(screen.queryByText('10.00')).not.toBeInTheDocument();
  });

  it('should handle an empty cart correctly', () => {
    render(<Cart cart={[]} setCart={setCartMock} />);
    cartItems.forEach(item => {
      expect(screen.queryByText(new RegExp(item.name, 'i'))).not.toBeInTheDocument();
    });
    expect(screen.queryByRole('button', { name: /Usuń/i })).not.toBeInTheDocument();
  });

  it('should display the correct number of items in the cart', () => {
    const cartItemElements = screen.getAllByRole('listitem');
    expect(cartItemElements).toHaveLength(cartItems.length);
  });
});
