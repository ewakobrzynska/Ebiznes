describe('Submit Login Form', () => {
  it('should submit the login form and check validation', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Login').click();
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('not.exist');
  });
});
