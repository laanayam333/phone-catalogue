describe('Phone Catalogue Tests', () => {
  it('successfully loads home page', () => {
    cy.visit('/');
  });

  it('opens / closes drawer menu & navigates from drawer to multiple views', () => {
    cy.get('[data-cy=burger-menu]').click();
    cy.wait(2000);
    cy.get('[data-cy=burger-menu]').click();
    cy.wait(2000);
    cy.get('[data-cy=burger-menu]').click();
    cy.wait(2000);
    cy.get(
      '.main-navigation__drawer-nav > .nav-links > [data-cy=contact-link] > .nav-links__link'
    ).click();
    cy.wait(2000);
    cy.get('[data-cy=burger-menu]').click();
    cy.wait(2000);
    cy.get(
      '.main-navigation__drawer-nav > .nav-links > [data-cy=phones-link] > .nav-links__link'
    ).click();
    cy.wait(2000);
  });

  it('clicks on a phone and loads its details page', () => {
    cy.get('[data-cy=phone-item]')
      .first()
      .click();
    cy.wait(2000);
  });

  it('returns to home page', () => {
    cy.get('[data-cy=return-home-button]').click();
  });
});
