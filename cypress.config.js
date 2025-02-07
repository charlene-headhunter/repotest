const { defineConfig } = require("cypress");

export default defineConfig({
  e2e: {
    baseUrl: 'http://booking-app:80', // Use the internal service name
    requestTimeout: 20000,
  },
});

});
