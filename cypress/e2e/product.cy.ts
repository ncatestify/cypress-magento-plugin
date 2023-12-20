import { ProductPage } from '@/pages/ProductPage';
import { StartPage } from '@/pages/StartPage';
import { CategoryPage } from '@/pages/CategoryPage';
import selectors from '../fixtures/selectors/product.json';
import productDetails from '../fixtures/productDetails.json';

describe('Prouct page tests', () => {
  const productPage: ProductPage = new ProductPage();
  const startPage: StartPage = new StartPage();
  const categoryPage: CategoryPage = new CategoryPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoad();
    startPage.goToSecondCategory();

    categoryPage.clickFirstItem();
  });

  it('Has title and price', () => {
    cy.ttProductHasPriceAndTitle();
  });

  it('Has image', () => {
    cy.ttProductHasImage();
  });

  it('Can be added to cart and wishlist', () => {
    cy.ttCanAddToCartAndWishlist();
  });

  it('Has description & more informations', () => {
    cy.get(selectors.descriptionWrapper).should('be.visible');
    cy.get(selectors.tabMoreInformations).should('be.visible');
  });
});
