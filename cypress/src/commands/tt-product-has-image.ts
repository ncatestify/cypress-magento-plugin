import selectors = require('../../fixtures/selectors/product.json')

export const ttProductHasImage = () => {
  cy.log('ttProductHasImage - NCA TESTIFY');
  cy.get(selectors.productImage).should('be.visible');
};
