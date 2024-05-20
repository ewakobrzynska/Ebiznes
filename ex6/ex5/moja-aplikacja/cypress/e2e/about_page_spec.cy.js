describe('About Page', () => {
  it('should display the about page', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Us');
  });
});
