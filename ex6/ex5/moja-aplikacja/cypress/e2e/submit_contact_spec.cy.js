describe('Submit Contact Form', () => {
  it('should submit the contact form', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Contact').click();
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').click();
  });
});
