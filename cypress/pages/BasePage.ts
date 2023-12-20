export abstract class BasePage {
  visit() {
    cy.visit('/');
  }

  waitForPageLoad() {
    cy.wait(Cypress.env('waitForPageLoad'));
  }
}
