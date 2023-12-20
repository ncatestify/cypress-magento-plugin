import selectors = require('../../fixtures/selectors/search.json');

export const ttSearchForMultipleResults = () => {
  cy.log('ttSearchForMultipleResults - NCA TESTIFY');

  cy.get(selectors.searchField).type(selectors.searchWordMultipleResults + '{enter}');
  cy.get(selectors.foundItems).should('have.length.gte', 3);
  cy.get(selectors.itemTitles).should('contain.text', selectors.searchWordMultipleResults);
};
