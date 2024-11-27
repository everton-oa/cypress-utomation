/// <reference types="cypress" />

import HomePage from "../../support/pageObjects/HomePage";

describe("End to end e-commerce Test", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  it("Submit Order", () => {
    const productName = globalThis.data.productname;

    const homePage = new HomePage();
    homePage.goTo("https://rahulshettyacademy.com/loginpagePractise");
    const productPage = homePage.login(
      globalThis.data.username,
      globalThis.data.password
    );

    productPage.pageValidation();
    productPage.getCartCount().should("have.length", 4);
    productPage.selectProduct(productName);
    productPage.selectFirstProduct();
    const cartPage = productPage.goToCart();
    cartPage.sumOfProducts().then(function (sum) {
      expect(sum).to.be.lessThan(200000);
    });

    const confirmationPage = cartPage.checkoutItems();

    confirmationPage.submitFormDetails();
    confirmationPage.getAlertMessage().should("contain", "Success");
  });
});
