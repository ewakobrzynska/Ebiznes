describe('Footer', () => {
  it('should display the footer and check its content', () => {
    cy.visit('https://example.cypress.io');
    cy.get('footer').should('be.visible');
    cy.get('footer').contains('Cypress.io').should('be.visible');
    cy.get('footer a').should('have.attr', 'href').and('include', 'cypress.io');
  });
});
