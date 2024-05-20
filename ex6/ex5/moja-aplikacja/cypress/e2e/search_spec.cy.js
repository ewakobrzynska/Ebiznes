describe('Search Functionality', () => {
  it('should display search results and check content', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.DocSearch-Button-Placeholder').click();
    cy.get('.DocSearch-Input').type('cypress{enter}');
    cy.get('.DocSearch-Hits').should('be.visible');
    cy.get('.DocSearch-Hit').should('have.length.greaterThan', 0);
  });
});
