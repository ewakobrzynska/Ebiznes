describe('Search Functionality', () => {
  it('should display search results', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.search__input').type('cypress{enter}');
    cy.get('.search__results').should('be.visible');
  });
});
