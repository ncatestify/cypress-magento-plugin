import { BasePage } from '@/pages/BasePage';
import selectors from '../fixtures/selectors/startpage.json';

export class StartPage extends BasePage {
  goToSecondCategory() {
    cy.get(selectors.categoryItems).should('be.visible').eq(1).click({ force: true });
  }
}
