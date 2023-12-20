import selectors = require('../../fixtures/selectors/product.json')

export const ttCanAddToCartAndWishlist = () => {
  cy.log('ttCanAddToCartAndWishlist - NCA TESTIFY');

  cy.get(selectors.addToCartButton).should('be.visible');
  cy.get(selectors.addToWishlistButton).should('be.visible');
};
