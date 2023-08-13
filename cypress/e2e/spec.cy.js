import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('Misael','clave')

    cy.wait(3000)
    cy.get('a#nameofuser').should('contain.text', 'Misael')
    cy.wait(5000)

    //recordar la version que esta usando npx cypress@12.13.0 run --env allure=true

  })

  // it('login', () => {
  //   cy.visit('https://demoblaze.com/')
  //   cy.get('a[data-target="#logInModal"]').click()
  //   LoginMethods.insertUserNameSingIn('Misael')
  //   LoginMethods.insertUserPassSingIn('123asd')
  //   cy.get('a[data-target="#signInModal"]').click()
  //   // LoginMethods.clickOnLoginButton()
  //   cy.wait(2000)
  //   cy.get('a#nameofuser').should('contain', 'Misael')
  //   cy.wait(5000)

  //   //recordar la version que esta usando npx cypress@12.13.0 run --env allure=true

  // })



})
