describe('Navbar', () => {
  it('should display the navbar and its links', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.navbar').should('be.visible');
    cy.get('.navbar-nav').children().should('have.length', 4);
    cy.get('.navbar-nav').children().eq(0).should('contain', 'Commands');
    cy.get('.navbar-nav').children().eq(1).should('contain', 'Utilities');
    cy.get('.navbar-nav').children().eq(2).should('contain', 'Cypress API');
    cy.get('.navbar-nav').children().eq(3).should('contain', 'Examples');
  });
});
