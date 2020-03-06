describe('The Home Page', function() {
  it('successfully loads home page', function() {
    cy.visit('/');
  });

  it('opens and closes drawer menu', function() {
    cy.get('[data-cy=burger-menu]').click();
    cy.wait(2000);
    cy.get('[data-cy=burger-menu]').click();
    cy.wait(2000);
  });

  it('clicks on a phone and loads its details page', function() {
    cy.get('[data-cy=phone-item]')
      .first()
      .click();
    cy.wait(2000);
  });

  it('returns to home page', function() {
    cy.get('[data-cy=return-home-button]').click();
  });
});
