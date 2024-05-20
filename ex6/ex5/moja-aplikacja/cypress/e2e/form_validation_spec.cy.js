describe('Form Validation', () => {
  it('should display validation messages for invalid input', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Forms').click();
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('short');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('be.visible');
    cy.get('.error').should('contain', 'Invalid email address');
    cy.get('.error').should('contain', 'Password is too short');
  });
});
