/// <reference types="cypress" />

describe("Cypress test", () => {
  it("Test name", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //40 - HANDLING CHILD WINDOWS USING CYPRESS
    cy.get("#opentab").then(function (e1) {
      const url = e1.prop("href");
      cy.visit(url);
      cy.origin(url, () => {
        cy.get("div.sub-menu-bar a[href*='about']").click();
      });
      
    });
  });
});
