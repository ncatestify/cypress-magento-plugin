import { BasePage } from './BasePage';
import selectors from '../fixtures/selectors/category.json';

export class CategoryPage extends BasePage {
  clickFirstItem() {
    cy.get(selectors.products).should('be.visible').first().click({ force: true });
  }
}
