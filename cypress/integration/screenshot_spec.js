describe('screenshot', () => {
  it('takes a screenshot of a chat\'s default opened window', () => {
    cy.visit('http:localhost:3000');

    cy.get('button', {timeout: 1000}).click();
    cy.document().its('fonts.status').should('equal', 'loaded');
    cy.get('body').toMatchImageSnapshot({name: 'default', threshold: 0.001});
  });
});
