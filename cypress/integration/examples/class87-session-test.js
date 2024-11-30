/// <reference types="cypress" />
const neatCsv = require("neat-csv");

describe("Test mocking HTTP response", async () => {
  it("Test Case", function () {
    cy.LoginAPI().then(async function () {
      cy.visit("https://rahulshettyacademy.com/client/", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
    cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get("[routerlink*='cart']").click();
    cy.contains("Checkout").click();
    cy.get("[placeholder*='Country']").type("Ind");
    cy.get(".ta-results button").each(($el, index, $list) => {
      if ($el.text() === " India") {
        cy.wrap($el).click();
      }
    });
    cy.get(".action__submit").click();
    cy.wait(2000);
    // cy.get(".order-summary button").eq(1).click();
    //Selector to find button by text
    cy.get(".order-summary button").contains("CSV").click();
    cy.readFile(
      Cypress.config("fileServerFolder") +
        "cypress/downloads/order-invoice_everton.oa.xlsx"
    ).then(async (text) => {
      const csv = await neatCsv(text);
    });
  });
});
