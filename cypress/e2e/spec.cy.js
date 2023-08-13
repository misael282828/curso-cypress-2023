import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"
import { singupMethods } from "./pages/singup/singup.methods"

describe('template spec', () => {

  // it('singup', () => {
  //   cy.visit('https://demoblaze.com/')
  //   cy.get('a[data-target="#signInModal"]').click()
  //   singupMethods.singup('platano', 'pass')
  //   cy.wait(2000)
  //   // cy.get('a#nameofuser').should('contain', 'Dilan')
  //   // cy.wait(5000)
  //   //   //recordar la version que esta usando npx cypress@12.13.0 run --env allure=true

  // })

  // it('login', () => {
  //   cy.visit('https://demoblaze.com/')
  //   cy.get('a[data-target="#logInModal"]').click()
  //   LoginMethods.login('platano', 'pass')
  //   cy.get('a#nameofuser').should('contain.text', 'platano')
  //   cy.wait(2000)
  //   //recordar la version que esta usando npx cypress@12.13.0 run --env allure=true

  // })

  it('click on product link ', ()=>{
    cy.visit('https://demoblaze.com/')
    HomeMethods.clickOnProduct('Sony xperia z5')
    cy.wait(3000)
  })


})
