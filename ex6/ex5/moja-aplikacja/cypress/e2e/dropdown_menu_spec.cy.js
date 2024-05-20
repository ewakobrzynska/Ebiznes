describe('Dropdown Menu', () => {
  it('should display dropdown menu options and select an option', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Dropdown').click();
    cy.get('.dropdown-menu').should('be.visible');
    cy.get('.dropdown-menu').contains('Option 1').click();
    cy.get('.dropdown-toggle').should('contain', 'Option 1');
  });
});
