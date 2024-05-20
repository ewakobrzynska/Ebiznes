describe('Navbar', () => {
  it('should display the navbar', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.navbar').should('be.visible');
  });
});
