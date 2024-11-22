//30 - HANDLING STATIC DROPDOWNS USING SELECT COMMAND WITH CYPRESS

/// <reference types="cypress" />

describe("Cypress test", () => {
  it("Test name", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //static dropdown
    cy.get("select").select("option2").should("have.value", "option2");

    // 31 - HANDLING DYNAMIC DROPDOWNS WITH EACH COMMAND ITERATION
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        $el.click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");
  });
});
