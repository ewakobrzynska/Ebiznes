describe('Tabs', () => {
  it('should switch between tabs', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Tabs').click();
    cy.get('.tabs').should('be.visible');
    cy.contains('Tab 2').click();
    cy.get('.tab-content').should('contain', 'Content for Tab 2');
  });
});
