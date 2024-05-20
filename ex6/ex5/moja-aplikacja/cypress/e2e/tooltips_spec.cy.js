describe('Tooltips', () => {
  it('should display tooltips', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Tooltips').trigger('mouseover');
    cy.get('.tooltip').should('be.visible');
  });
});
