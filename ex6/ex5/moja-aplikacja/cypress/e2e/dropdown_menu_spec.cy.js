describe('Dropdown Menu', () => {
  it('should display dropdown menu options', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Dropdown').click();
    cy.get('.dropdown-menu').should('be.visible');
  });
});
