describe('Home Page', () => {
  it('should load the home page and check elements', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Kitchen Sink').should('be.visible');
    cy.get('nav').should('be.visible');
    cy.get('footer').should('be.visible');
    cy.get('h1').should('contain', 'Kitchen Sink');
  });
});
