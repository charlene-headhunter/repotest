const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: "http://0.0.0.0:8000",
      requestTimeout: 20000,
  },
  component: {
       ...
    },
    hosts: {
      "localhost": "127.0.0.1"
    }
  });
});
