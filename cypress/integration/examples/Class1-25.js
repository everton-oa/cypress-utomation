/// <reference types="cypress" />

describe("My first cypress test", () => {
  it("Test 1", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("Ca");
    //Retrieve all elements on the page - visible and invisible
    cy.get(".product").should("have.length", 5);
    //get only visible elements
    cy.get(".product:visible").should("have.length", 4);
    //parent child chaining
    cy.get(".products").find(".product").should("have.length", 4);
    //clicking on an element in the array with hardcoded index
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
    //dynamically adding a item to the cart
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });
  });
});
