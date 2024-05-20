describe('Tooltips', () => {
  it('should display tooltips on hover', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Tooltips').trigger('mouseover');
    cy.get('.tooltip').should('be.visible');
    cy.get('.tooltip').should('contain', 'This is a tooltip');
  });
});
