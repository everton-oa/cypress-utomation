/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("Cypress test", () => {
  it("Test name", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //41 - HANDLING FRAMES USING CYPRESS
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    

  });
});
