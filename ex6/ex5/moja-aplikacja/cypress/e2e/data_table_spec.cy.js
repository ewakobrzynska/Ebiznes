describe('Data Table', () => {
  it('should display data table and sort data', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Data Table').click();
    cy.get('.data-table').should('be.visible');
    cy.get('.data-table th').first().click();
    cy.get('.data-table td').first().should('contain', 'Sorted Data');
    cy.get('.data-table th').eq(1).click();
    cy.get('.data-table td').eq(1).should('contain', 'Other Sorted Data');
  });
});
