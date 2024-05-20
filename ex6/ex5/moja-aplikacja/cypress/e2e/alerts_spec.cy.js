describe('Alerts', () => {
  it('should display and close alerts', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Alerts').click();
    cy.get('.alert').should('be.visible');
    cy.get('.alert').should('contain', 'This is an alert');
    cy.get('.alert .close').click();
    cy.get('.alert').should('not.be.visible');
  });
});
