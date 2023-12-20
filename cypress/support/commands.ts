// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { ttSortByPrice } from 'cypress/src/commands/tt-sort-by-price';
import { ttValidatePrices } from 'cypress/src/commands/tt-validate-prices';
import { ttChangeDisplayedProductsAmount } from 'cypress/src/commands/tt-change-displayed-products-amount';
import { ttSearchForMultipleResults } from 'cypress/src/commands/tt-search-for-multiple-results';
import { ttProductHasPriceAndTitle } from 'cypress/src/commands/tt-product-has-price-and-title';
import { ttProductHasImage } from 'cypress/src/commands/tt-product-has-image';
import { ttSearchForNoResults } from 'cypress/src/commands/tt-search-for-no-results';
import { ttCanAddToCartAndWishlist } from 'cypress/src/commands/tt-can-add-to-cart-and-wishlist.cy';
import { ttValidateStartpage } from 'cypress/src/commands/tt-validate-startpage.cy';

Cypress.Commands.add('ttSortByPrice', ttSortByPrice);
Cypress.Commands.add('ttValidatePrices', ttValidatePrices);
Cypress.Commands.add('ttChangeDisplayedProductsAmount', ttChangeDisplayedProductsAmount);
Cypress.Commands.add('ttSearchForMultipleResults', ttSearchForMultipleResults);
Cypress.Commands.add('ttProductHasPriceAndTitle', ttProductHasPriceAndTitle);
Cypress.Commands.add('ttProductHasImage', ttProductHasImage);
Cypress.Commands.add('ttSearchForNoResults', ttSearchForNoResults);
Cypress.Commands.add('ttCanAddToCartAndWishlist', ttCanAddToCartAndWishlist);
Cypress.Commands.add('ttValidateStartpage', ttValidateStartpage);
