const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: 'http://host.docker.internal:8000',  // Use host.docker.internal in CI
    requestTimeout: 20000,
  },
};

