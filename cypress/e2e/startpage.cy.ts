import selectors from '../fixtures/selectors/startpage.json';
import { StartPage } from '@/pages/StartPage';

describe('Startpage tests', () => {
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoad();
  });

  it('Startpage valid and contains products', () => {
    cy.ttValidateStartpage();
  });
});
