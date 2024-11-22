/// <reference types="cypress" />

describe("My second cypress test", () => {
  it("Test 1", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("Ca");
    //Retrieve all elements on the page - visible and invisible
    cy.get(".products").as("productLocator");
    //dynamically adding a item to the cart
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });
    cy.get('.tada').click
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
