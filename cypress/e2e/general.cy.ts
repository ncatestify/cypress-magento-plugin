import selectors from '../fixtures/selectors/startpage.json';

describe('General page tests', function () {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(Cypress.env('waitForPageLoad'));
  })

  it('Check if the logo has the title attribute set', function () {
    cy.get(selectors.logoSelector).invoke('attr', 'title').should('not.be.empty');
  })
})
