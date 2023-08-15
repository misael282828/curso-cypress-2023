import { CartMethods } from "./pages/cart/cart.methods"
import { commonPageMethods } from "./pages/common-page/common-page.methods"
import { LoginMethods } from "./pages/login/login.methods"
import { singupMethods } from "./pages/singup/singup.methods"
import { Logger } from "./util/logger"

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

  it('Login', () => {
    const user = 'platano'
    const password = 'pass'

    Logger.stepNumber(1)
    Logger.step("Navegate to DemoBlaze page ")
    cy.visit('https://demoblaze.com/')

    Logger.stepNumber(2)
    Logger.step('Click on "Login" link')
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`Login with this credentials: "${user}/${password}"`)
    LoginMethods.login(user, password)

    Logger.verification(`The Home page should show "Welcome ${user}" text`)
    cy.get('a#nameofuser').should('contain.text', user)
    cy.wait(2000)
    //recordar la version que esta usando npx cypress@12.13.0 run --env allure=true

  })

  // it('click on product link ', () => {
  //   cy.visit('https://demoblaze.com/')
  //   cy.wait(30000)

  //   CartMethods.clickOnDeleteLink('Samsung galaxy s6')
  //  // HomeMethods.clickOnProduct('Samsung galaxy s6')
  //   cy.wait(5000)
    
  //   // ProductDetails_Methods.clickOnAddToCartButton() 
   
  // })


  
})
