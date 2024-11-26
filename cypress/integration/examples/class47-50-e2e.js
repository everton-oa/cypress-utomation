/// <reference types="cypress" />

describe("End to end e-commerce Test", () => {
  it("Submit Order", () => {
    cy.visit("https://rahulshettyacademy.com/loginpagePractise");

    //47 to 50 - END TO END
    const productName = "Nokia Edge";

    cy.get("#username").type("rahulshettyacademy");
    cy.get("#password").type("learning");
    cy.get("#signInBtn").click();
    cy.contains("Shop Name").should("be.visible");
    cy.get("app-card").should("have.length", 4);
    cy.get("app-card")
      .filter(`:contains("${productName}")`)
      .then(($element) => {
        cy.wrap($element).should("have.length", 1);
        cy.wrap($element).contains("button", "Add").click();
      });
    cy.get("app-card").eq(0).contains("button", "Add").click();
    cy.contains("a", "Checkout").click();
    let sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($el) => {
        const amount = Number($el.text().split(" ")[1].trim());
        sum = sum + amount;
      })
      .then(function () {
        expect(sum).to.be.lessThan(200000);
      });
    cy.contains("button", "Checkout").click();
    cy.get("#country").type("India");
    cy.get('.suggestions ul li a').click();
    cy.get(".btn-success").click();
    cy.get(".alert-success").should("contain", "Success");
  });
});
