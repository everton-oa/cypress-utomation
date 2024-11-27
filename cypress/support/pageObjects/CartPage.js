import ConfirmationPage from "./ConfirmationPage";

class CartPage {
  checkoutItems() {
    cy.contains("button", "Checkout").click();
    return new ConfirmationPage();
  }

  sumOfProducts() {
    let sum = 0;
    return cy.get("tr td:nth-child(4) strong")
      .each(($el) => {
        const amount = Number($el.text().split(" ")[1].trim());
        sum = sum + amount;
      })
      .then(function () {
        return sum;
        // expect(sum).to.be.lessThan(200000);
      });
  }
}

export default CartPage;
