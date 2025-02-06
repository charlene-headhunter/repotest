const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'http://booking-app:80',
      requestTimeout: 20000,
  },
});
