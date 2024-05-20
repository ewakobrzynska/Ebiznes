describe('Alerts', () => {
  it('should display alerts', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Alerts').click();
    cy.get('.alert').should('be.visible');
  });

  it('should close alerts', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Alerts').click();
    cy.get('.alert .close').click();
    cy.get('.alert').should('not.be.visible');
  });
});
