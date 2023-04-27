const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  viewportWidth: 1980,
  viewportHeight: 1024,
  baseUrl:"https://demoqa.com",
  },
});
