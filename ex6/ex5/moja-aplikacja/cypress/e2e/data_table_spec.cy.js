describe('Data Table', () => {
  it('should display data table', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Data Table').click();
    cy.get('.data-table').should('be.visible');
  });

  it('should sort data table', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Data Table').click();
    cy.get('.data-table th').first().click();
    cy.get('.data-table td').first().should('contain', 'Sorted Data');
  });
});
