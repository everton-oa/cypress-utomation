const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
  },
});
