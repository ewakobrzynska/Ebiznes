describe('Toggle Switch', () => {
  it('should toggle the switch and check its state', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.toggle-switch').click();
    cy.get('.toggle-switch').should('have.class', 'active');
    cy.get('.toggle-switch input').should('be.checked');
    cy.get('.toggle-switch').click();
    cy.get('.toggle-switch').should('not.have.class', 'active');
    cy.get('.toggle-switch input').should('not.be.checked');
  });
});
