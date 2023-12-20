import selectors from '../fixtures/selectors/cart.json';
import { CartPage } from '@/pages/CartPage';
import { StartPage } from '@/pages/StartPage';
import { CategoryPage } from '@/pages/CategoryPage';

describe('Shopping cart tests', () => {
  const startPage: StartPage = new StartPage();
  const categoryPage: CategoryPage = new CategoryPage();
  const cartPage: CartPage = new CartPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoad();
    startPage.goToSecondCategory();

    categoryPage.clickFirstItem();

    cy.get(selectors.buttonAddToCart).click();
    cy.get(selectors.notificationMessageTop).should('be.visible');

    cartPage.visit();
  });

  it('Can add product to cart', () => {
    cy.get(selectors.itemAmountInCart).should('be.visible').should('have.attr', 'value').should('eq', '1');
  });

  it('Can change quantity in card', () => {
    cy.get(selectors.inputAmountInCard).should('be.visible').clear().type('2{enter}').should('have.value', '2');
  });

  it('Can remove product from card', () => {
    cartPage.removeArticle(0);
    cy.get(selectors.cartEmptyTextField).should('be.visible');
  });
});
