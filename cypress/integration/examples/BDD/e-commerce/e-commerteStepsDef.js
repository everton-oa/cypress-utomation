import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";
import ProductPage from "../../../../support/pageObjects/ProductPage";
import CartPage from "../../../../support/pageObjects/CartPage";
import ConfirmationPage from "../../../../support/pageObjects/ConfirmationPage";

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const confirmationPage = new ConfirmationPage();

Given("I am on e-commerce page", function () {
  homePage.goTo(Cypress.env("url") + "/loginpagePractise");
});

When("I login to the application", function () {
  globalThis.productPage = homePage.login(
    globalThis.data.username,
    globalThis.data.password
  );
  globalThis.productPage.pageValidation();
  globalThis.productPage.getCartCount().should("have.length", 4);
});

When("I login to the application portal", function (dataTable) {
  globalThis.productPage = homePage.login(
    dataTable.rawTable[1][0],
    dataTable.rawTable[1][1]
  );
  globalThis.productPage.pageValidation();
  globalThis.productPage.getCartCount().should("have.length", 4);
});

When("I add items to the Cart and checkout", function () {
  globalThis.productPage.selectProduct(globalThis.data.productname);
  globalThis.productPage.selectFirstProduct();
  globalThis.cartPage = globalThis.productPage.goToCart();
});

When("Validate the total price limit", function () {
  globalThis.cartPage.sumOfProducts().then(function (sum) {
    expect(sum).to.be.lessThan(200000);
  });
});

Then("Select the country submit and verify thank you", function () {
  globalThis.confirmationPage = cartPage.checkoutItems();
  globalThis.confirmationPage.submitFormDetails();
  globalThis.confirmationPage.getAlertMessage().should("contain", "Success");
});
