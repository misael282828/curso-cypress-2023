import { HomeElements } from "./home.elements";

export class HomeMethods {

  static clickOnPhonesOption() {
    HomeElements.categoriesMenu.phones.click()
  }

  static clickOnMonitorsOption() {
    HomeElements.categoriesMenu.monitors.click()
  }

  static clickOnLaptopsOption() {
    HomeElements.categoriesMenu.laptops.click()
  }

  static clickOnProduct(productName) {
    HomeElements.product(productName).click()
  }

  static verifyProductIsDisplay(productName){
    HomeElements.product(productName).should("be.visible")
  }
}