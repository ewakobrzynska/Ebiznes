describe('Home Page', () => {
  it('should load the home page', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Kitchen Sink');
  });
});
