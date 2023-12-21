import selectors from '../fixtures/selectors/startpage.json';
import {StartPage} from '@/pages/StartPage';

describe('General page tests', function () {
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoad();
  });

  it('Check if the logo has the title attribute set', function () {
    cy.get(selectors.logoSelector).invoke('attr', 'title').should('not.be.empty');
  })
})
