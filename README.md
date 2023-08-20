# curso-cypress-2023



## Instalación y Configuración de Cypress

1. **Instalar Cypress:**
   ```
   npm install cypress --save-dev
   ```

2. **Instalar Allure Command Line:**
   ```
   npm install allure-commandline --save-dev
   ```
  
3. **Instalar Cypress Parallel:**
   ```
   npm install -g cypress-parallel
   ```
  
4. **Instalar el Complemento de Allure para Cypress:**
   ```
   npm install @shelex/cypress-allure-plugin --save-dev
   ```

## Configuración de AWS CI/CD

Crear un archivo `buildspec.yaml` y agregar:

```yaml
version: 0.2
phases:
  install:
    runtime-versions:
      nodejs: latest
    pre_build:
      commands:
        - npm install
  build:
    commands:
      - npm run cy:parallel
```

## Scripts para Mejor Ejecución de las Pruebas

Agrega estos scripts en tu archivo `package.json` para facilitar la configuración y ejecución de las pruebas:

```json
"scripts": {
  "generar-reporte": "allure generate allure-results -o allure-report --clean",
  "abrir-reporte": "allure open",
  "ejecutar-pruebas": "npx cypress run --headed --env allure=true",
  "limpiar-reporte": "rimraf ./allure-report && rimraf ./allure-results",
  "test": "npm run limpiar-reporte && npm run ejecutar-pruebas && npm run generar-reporte && npm run abrir-reporte",
  "cy:parallel": "npm run limpiar-reporte && cypress-parallel -s ejecutar-pruebas -d ./cypress/e2e/tests -a && npm run generar-reporte",
  "open": "npm run cypress --browser chrome --headed",
  "chromeWebSecurity": "false",
  "testFiles": "**/*.cy.js"
}
```

## Métodos más Utilizados en Cypress

Algunos de los métodos más utilizados en Cypress son:

- `cy.get()`
- `cy.click()`
- `cy.type()`
- `cy.contains()`
- `cy.visit()`
- `cy.url()`
- `cy.wait()`
- `cy.should()`
- `cy.intercept()`
- `cy.invoke()`

## Métodos Should en Cypress

Algunos ejemplos de los métodos `should()` en Cypress:

- `cy.should('exist')`
- `cy.should('be.visible')`
- `cy.should('have.text', 'texto esperado')`
- `cy.should('contain', 'texto esperado')`
- `cy.should('have.class', 'clase-esperada')`
