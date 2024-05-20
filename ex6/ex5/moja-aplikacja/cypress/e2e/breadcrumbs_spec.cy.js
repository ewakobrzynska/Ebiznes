describe('Breadcrumbs', () => {
  it('should display breadcrumbs', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.breadcrumbs').should('be.visible');
  });

  it('should navigate using breadcrumbs', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.breadcrumbs a').first().click();
    cy.url().should('include', '/home');
  });
});
