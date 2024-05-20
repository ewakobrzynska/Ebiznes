describe('Navigation Links', () => {
  it('should navigate to different pages', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Commands').click();
    cy.url().should('include', '/commands');
    cy.contains('Utilities').click();
    cy.url().should('include', '/utilities');
  });
});
