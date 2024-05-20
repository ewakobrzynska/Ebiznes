describe('Navigation Links', () => {
  it('should navigate to different pages and check content', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Commands').click();
    cy.url().should('include', '/commands');
    cy.contains('get').should('be.visible');
    cy.contains('Utilities').click();
    cy.url().should('include', '/utilities');
    cy.contains('invoke').should('be.visible');
  });
});
