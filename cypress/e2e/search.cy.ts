import selectors from '../fixtures/selectors/search.json';
import { StartPage } from '@/pages/StartPage';

describe('Search function tests', () => {
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoad();
  });

  it('Can perform a search with mutliple results', () => {
    cy.ttSearchForMultipleResults();
  });

  it('Can find a single product', () => {
    cy.get(selectors.searchField).type(selectors.searchWordSingleResult);
    cy.contains(selectors.onlyOneProductFoundText, { matchCase: false }).should('be.visible');
  });

  it('Can perform a search with no result', () => {
    cy.ttSearchForNoResults();
  });

  it('Can see suggestions in searchbar', () => {
    cy.get(selectors.searchField).click().type(selectors.searchWordSingleResult);
    cy.get(selectors.searchSuggestion).should('be.visible').should('include.text', selectors.searchWordSingleResult);
  });
});
