import selectors = require('./../../fixtures/selectors/category.json')

export const ttChangeDisplayedProductsAmount = (number: string) => {
  cy.log('ttChangeDisplayedProductsAmount - NCA TESTIFY');

  cy.get(selectors.displayedProductsOnPageSelect).select(number);
  cy.get(selectors.displayedArticlesAmount).should('contain.text', number);
  cy.get(selectors.displayedArticles).should('have.length', number);
};
