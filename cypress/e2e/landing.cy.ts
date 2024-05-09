describe('basic test', () => {
  it('test', () => {
    cy.visit('/');
    cy.contains(/goat/i).should('exist');
  });
});
