import { PurchaseElements } from "./purchaseElements";

export class PurchaseMethods {
  
  
  static  clickOnOkButton() {
    cy.wait(1000)
    PurchaseElements.buttons.ok.click();
  }

  static  greenMarkDisplayed() {
    PurchaseElements.icon.greenCheckMark.should("exist");
  }
 
}
