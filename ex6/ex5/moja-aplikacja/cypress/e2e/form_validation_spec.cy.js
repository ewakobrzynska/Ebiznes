describe('Form Validation', () => {
  it('should display validation messages', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Forms').click();
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('short');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('be.visible');
  });
});
