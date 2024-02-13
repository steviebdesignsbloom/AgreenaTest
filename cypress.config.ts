import { defineConfig } from "cypress";
// import 'cypress-plugin-steps';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here    
    },
    baseUrl: "http://localhost:3000/",
    viewportWidth: 1800,
    projectId: "7fqkp7",
    viewportHeight: 2500
  },
  env: {
    apiUrl: 'https://petstore.swagger.io/v2',
    apiKey: 'special-key'
  },
});
