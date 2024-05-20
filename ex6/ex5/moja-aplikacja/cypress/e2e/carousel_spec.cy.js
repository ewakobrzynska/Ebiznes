describe('Carousel', () => {
  it('should display carousel items', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.carousel').should('be.visible');
    cy.get('.carousel-item').should('have.length', 3);
  });

  it('should navigate carousel items', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.carousel-next').click();
    cy.get('.carousel-item.active').should('have.attr', 'data-index', '1');
  });
});
