import selectors = require('../../fixtures/selectors/product.json');

export const ttProductHasPriceAndTitle = () => {
  cy.log('ttProductHasPriceAndTitle - NCA TESTIFY');

  cy.get(selectors.titleWrapper).should('be.visible').invoke('text').should('have.length.gte', 1);
  cy.get(selectors.price).first().invoke('text').should('have.length.gte', 1).should('contain', selectors.currency);
};
