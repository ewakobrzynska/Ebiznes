describe('Breadcrumbs', () => {
  it('should display breadcrumbs and navigate using them', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.breadcrumbs').should('be.visible');
    cy.get('.breadcrumbs a').first().click();
    cy.url().should('include', '/home');
    cy.get('.breadcrumbs a').should('have.length.greaterThan', 0);
  });
});
