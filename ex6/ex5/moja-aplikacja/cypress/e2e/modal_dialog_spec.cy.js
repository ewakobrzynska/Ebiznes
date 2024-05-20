describe('Modal Dialog', () => {
  it('should display and close modal dialog and check content', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Modal').click();
    cy.get('.modal-dialog').should('be.visible');
    cy.get('.modal-dialog').contains('Modal Title').should('be.visible');
    cy.get('.modal-close').click();
    cy.get('.modal-dialog').should('not.be.visible');
  });
});
