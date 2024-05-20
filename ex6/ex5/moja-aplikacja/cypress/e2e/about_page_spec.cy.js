describe('About Page', () => {
  it('should display the about page and check its content', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Us').should('be.visible');
    cy.contains('Cypress.io').should('be.visible');
  });
});
