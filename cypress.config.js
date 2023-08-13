const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  retries:1,// para decirle a cypress que intente la prueba de nuevo 1 ves 
  //pero dodemos indicar la cantidada de intentos que necesitemos 
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
    },
  },
});
