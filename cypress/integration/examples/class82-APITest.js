/// <reference types="cypress" />

describe("Test mocking HTTP response", function () {
  it("Test Case", function () {
    cy.request(
      "POST",
      "https://rahulshettyacademy.com/Library/Addbook.php",
      {
        name: "Learn Appium Automation with Java - by Everton",
        isbn: "EA",
        aisle: "123456",
        author: "Everton Araujo",
      }
    ).then(function (response) {
      expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.equal(200);
    });
  });
});
