import { commonPageData } from "./common-page.data";
import { commonPageElements } from "./common-page.elements";

export class commonPageMethods {

  static navegateToDemoBlaze() {
    cy.visit(commonPageData.url)
  }

  static clickOnHomeOption() {
    commonPageElements.topMenu.home.click()
  }

  static clickOnContactOption() {
    commonPageElements.topMenu.contact.click()
  }

  static clickOnCartOption() {
    commonPageElements.topMenu.cart.click()
  }

  static clickOnloginOption() {
    commonPageElements.topMenu.login.click()
  }

  static clickOnSingupOption() {
    commonPageElements.topMenu.singup.click()
  }
}