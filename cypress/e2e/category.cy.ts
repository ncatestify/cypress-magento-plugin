import { CategoryPage } from '@/pages/CategoryPage';
import { StartPage } from '@/pages/StartPage';
import selectors from '../fixtures/selectors/category.json';

describe('Category page tests', () => {
  const categoryPage: CategoryPage = new CategoryPage();
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoad();
    startPage.goToSecondCategory();
  });

  it('Sorts products from lowest to highest', () => {
    cy.ttSortByPrice();
    cy.ttValidatePrices();
  });

  it('Changes amount of displayed products', () => {
    cy.ttChangeDisplayedProductsAmount('24');
  });
});
