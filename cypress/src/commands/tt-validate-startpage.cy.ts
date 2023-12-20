import selectors = require('../../fixtures/selectors/startpage.json');

export const ttValidateStartpage = () => {
  cy.log('ttValidateStartpage - NCA Testify');

  cy.log('Login, register, search and footer visible');
  cy.contains(selectors.loginButton, { matchCase: false }).should('be.visible');
  cy.contains(selectors.registerButton, { matchCase: false }).should('be.visible');
  cy.get('footer').should('be.visible');
  cy.get(selectors.search).should('be.visible');

  cy.log('Startpage has items');
  cy.get(selectors.mainContent).should('be.visible').should('not.be.empty');
  cy.get(selectors.productItems).should('be.visible').should('have.length.gte', 1);
};
