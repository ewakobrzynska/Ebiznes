describe('Contact Form', () => {
  it('should display contact form', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Contact').click();
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
  });
});
