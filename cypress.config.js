const { defineConfig } = require("cypress");

module.exports = defineConfig({
  extends: ['plugin:cypress/recommended'],
  rules: {
    'no-unused-vars': ['error', { 'varsIgnorePattern': '^cy$' }]
  },
  e2e: {
    env:{
      // Define your custom environment variables here
      'cypress/globals': true,
      API_URL: 'https://api.example.com',
      USER_EMAIL: 'luizfernandoqa@gmail.com',
      USER_PASSWORD: 'teste4321'

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
