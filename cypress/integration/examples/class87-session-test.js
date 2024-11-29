/// <reference types="cypress" />

describe("Test mocking HTTP response", function () {
  it("Test Case", function () {
    cy.LoginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client/", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
  });
});
