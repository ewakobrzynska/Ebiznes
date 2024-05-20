describe('Footer', () => {
  it('should display the footer', () => {
    cy.visit('https://example.cypress.io');
    cy.get('footer').should('be.visible');
  });
});
