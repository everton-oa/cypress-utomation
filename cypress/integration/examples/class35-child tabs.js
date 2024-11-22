/// <reference types="cypress" />

describe("Cypress test", () => {
  it("Test name", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //35 - HANDLING CHILD TAB WITH COMBINATION OF CYPRESS AND JQUERY COMMANDS

    // Remove the attribute 'target' before clicking on the element
    cy.get("#opentab").invoke("removeAttr", "target").click();
    // Changing the domain to perform actions on the new page
    cy.origin("https://www.qaclickacademy.com/", () => {
      cy.get("#navbarSupportedContent a[href*='about'").click();
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });
});
