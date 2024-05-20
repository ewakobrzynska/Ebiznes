describe('Carousel', () => {
  it('should display carousel items and navigate through them', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.carousel').should('be.visible');
    cy.get('.carousel-item').should('have.length', 3);
    cy.get('.carousel-next').click();
    cy.get('.carousel-item.active').should('have.attr', 'data-index', '1');
    cy.get('.carousel-prev').click();
    cy.get('.carousel-item.active').should('have.attr', 'data-index', '0');
  });
});
