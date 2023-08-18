import { commonPageData } from "./common-page.data";
import { commonPageElements } from "./common-page.elements";

export class commonPageMethods {

  
  static navegateToDemoBlaze() {
    cy.clearCookies()
    cy.visit(commonPageData.url)
  }

  static clickOnHomeOption() {
    commonPageElements.topMenu.home.click()
  }

  static clickOnContactOption() {
    commonPageElements.topMenu.contact.click()
  }

  static clickOnCartOption() {
    Cypress.on('uncaught:exception', (err, runnable) => {
     
      return false
    })
    commonPageElements.topMenu.cart.click()
  }

  static clickOnloginOption() {
    commonPageElements.topMenu.login.click()
  }

  static clickOnSingupOption() {
    commonPageElements.topMenu.singup.click()
  }

  
  static verifyTextAlert(expectedMessage){
    cy.on('window:alert', (str) => {
      expect(str).to.equal(expectedMessage)
    })
  }

  static verifiUrlName(urlName){
    cy.url().should('include', urlName)
  }


  static  generateRandomString(length=10) {
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset.charAt(randomIndex);
    }
  
    return randomString;
  }

  static verifySingedUser(username){
    commonPageElements.signedUp.should("have.text", `Welcome ${username}`)
  }

}