describe('Toggle Switch', () => {
  it('should toggle the switch', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.toggle-switch').click();
    cy.get('.toggle-switch').should('have.class', 'active');
  });
});
