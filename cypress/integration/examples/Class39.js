/// <reference types="cypress" />

describe("Cypress test", () => {
  it("Test name", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //35 - HANDLING WEB TABLES WITH CYPRESS USING EACH COMMAND

    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");
    // Force the click on hidden elements
    cy.contains("Top").click({ force: true });
  });
});
