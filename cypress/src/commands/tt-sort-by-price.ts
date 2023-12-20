import selectors = require('../../fixtures/selectors/category.json');

export const ttSortByPrice = () => {
  cy.log('Sort by price - NCA TESTIFY');
  cy.get(selectors.sorter).select('Preis');
};
