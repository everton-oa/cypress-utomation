/// <reference types="cypress" />

describe("Cypress test", () => {
  it("Test name", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    //44 - AUTOMATING CALENDARS
    const dayToSelect = "15";
    const monthToSelect = "6";
    const yearToSelect = "2027";
    const expectedList = [monthToSelect, dayToSelect, yearToSelect];

    cy.get(".react-date-picker__inputGroup").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.contains("button", yearToSelect).click();
    cy.get(".react-calendar__year-view__months__month")
      .eq(Number(monthToSelect) - 1)
      .click();
    cy.contains("abbr", dayToSelect).click();

    cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
      cy.wrap($el).invoke("val").should("eq", expectedList[index]);
    });
  });
});
