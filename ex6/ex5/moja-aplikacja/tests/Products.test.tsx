import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from '../src/components/Products';

describe('Products Component', () => {
  const mockProducts = [
    { id: 1, name: 'Product 1', price: '10.00' },
    { id: 2, name: 'Product 2', price: '20.00' },
    { id: 3, name: 'Product 3', price: '30.00' }
  ];

  const mockAddToCart = jest.fn();

  beforeEach(() => {
    render(<Products addToCart={mockAddToCart} />);
  });

  it('should render the products title', () => {
    expect(screen.getByText('Lista Produktów')).toBeInTheDocument();
  });

  it('should render products list with correct data', () => {
    mockProducts.forEach(product => {
      expect(screen.getByText(`${product.name} - ${product.price}`)).toBeInTheDocument();
    });
  });

  it('should call addToCart function when "Dodaj do koszyka" button is clicked', () => {
    const addToCartButtons = screen.getAllByText('Dodaj do koszyka');
    addToCartButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(mockAddToCart).toHaveBeenCalledWith(mockProducts[index]);
    });
  });

  it('should render correct number of products', () => {
    const productListItems = screen.getAllByRole('listitem');
    expect(productListItems.length).toBe(mockProducts.length);
  });
});
