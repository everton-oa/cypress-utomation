//29 - HOW TO VERIFY AND AUTOMATE CHECKBOXES WITH CYPRESS

/// <reference types="cypress" />

describe("Cypress test", () => {
  it("Test name", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //CHECKING A CHECKBOX AND VALIDATING IT IS CHECKED
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    //UNCHECKING A CHECKBOX
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    //CHECKING MORE THAN ONE CHECKBOX
    cy.get("input[type='checkbox']").check(["option2", "option3"]);
  });
});
