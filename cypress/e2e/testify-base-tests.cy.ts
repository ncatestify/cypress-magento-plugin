import { StartPage } from "@/pages/StartPage";

describe('TESTIFY base tests', () => {
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoad();
  });

  it('Imprint', () => {
    cy.ttValidateImprintClickable();
  });

  it('Detect google services', () => {
    cy.ttValidateNoGoogleServices();
  });

  it('More than one img with status ok', () => {
    cy.ttValidateAllImagesResponseStatusOk();
  });

  it('More than 2 internal links for each are ok', () => {
    cy.ttEveryInternalLinkStatusOk();
  });

  it('All subpages are loading', () => {
    cy.ttEveryInternalLinkIsLoading();
  });

  it('Validate page content', () => {
    cy.ttValidatePageContent();
  });
});
