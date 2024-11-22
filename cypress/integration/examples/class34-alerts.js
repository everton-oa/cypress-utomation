/// <reference types="cypress" />

describe("Cypress test", () => {
  it("Test name", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //34 - HOW CYPRESS AUTO HANDLES ALERTS IN WEB APPS
    cy.get("#alertbtn").click();
    cy.get("#confirmbtn").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      expect(str).to.equal(
        "Hello , Are you sure you want to confirm?"
      );
    });
  });
});
