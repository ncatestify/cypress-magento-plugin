import selectors = require('../../fixtures/selectors/search.json');

export const ttSearchForNoResults = () => {
  cy.get(selectors.searchField).type('ABC123{enter}');
  cy.contains(selectors.noProductFoundText, { matchCase: false }).should('be.visible');
};
