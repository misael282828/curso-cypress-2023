import { Logger } from "../../util/logger";
import { commonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods{
  static clickOnDeleteLink(productName){
    CartElements.links.delete(productName).click()
  }

  static verifyProductAdded(productName){
    CartElements.links.delete(productName).should("be.visible")
  }
  static verifiCartPageIsShow(){
    cy.url().should('include', 'cart.html')
  }

  static clickOnPlaceOrderButton(){
    CartElements.buttons.placeOrder.click()
  }

  static deleteProduct(){
    cy.intercept('POST','https://api.demoblaze.com/deleteitem').as('deleteItem')
    cy.get('a[onclick*="deleteItem"]').each($linkDelete => {
      $linkDelete.click();
      cy.wait('@deleteItem')
    });
    
  }

  static emptyCart(username, password){
    Logger.subStep('navegate to Demoplaze')
      commonPageMethods.navegateToDemoBlaze()
      commonPageMethods.logout()
      commonPageMethods.clickOnHomeOption()
      commonPageMethods.clickOnloginOption()
      LoginMethods.login(username,password)
      commonPageMethods.clickOnCartOption()
      this.deleteProduct()
  }


};