import { purchaseValidationElements } from "./purchase-validation.elements";

export class purchaseValidationMethods{

  static get clickOnOkButton(){
    purchaseValidationElements.buttons.ok.click()
  }

  static get varifyCheckMarkIsDisplayed(){
    purchaseValidationElements.icons.greenCheckMark.should('exist')
  }
}