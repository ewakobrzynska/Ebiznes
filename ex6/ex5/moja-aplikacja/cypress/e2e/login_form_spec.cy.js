describe('Login Form', () => {
  it('should display login form', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Login').click();
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });
});
