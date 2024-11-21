/// <reference types="cypress" />

describe("My first cypress test", () => {
  it("Test 1", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("Ca");
    //Retrieve all elements on the page - visible and invisible
    cy.get(".product").should("have.length", 5);
    //get only visible elements
    cy.get(".product:visible").should("have.length", 4);

    cy.get(".products").as("productLocator");

    //parent child chaining
    cy.get("@productLocator").find(".product").should("have.length", 4);
    //clicking on an element in the array with hardcoded index
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        console.log("ASYNC LOG");
      });
    //dynamically adding a item to the cart
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });
    //assert logo text is correctly displayed
    cy.get(".brand").should("have.text", "GREENKART");

    // Understanding the Difference between Jquery and Cypress commands
    cy.get(".brand").then(function (logoElement) {
      // print a log in the test runner
      cy.log(logoElement.text());
      // print a log in the browser console (devTools)
      console.log(logoElement.text());
    });
  });
});
