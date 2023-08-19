import { PurchaseElements } from "./purchaseElements";

export class PurchaseMethods {
  
  
  static  clickOnOkButton() {
    PurchaseElements.buttons.ok.click();
  }

  static  greenMarkDisplayed() {
    PurchaseElements.icon.greenCheckMark.should("exist");
  }
 
}
