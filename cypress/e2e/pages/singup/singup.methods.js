import { commonPageMethods } from "../common-page/common-page.methods";
import { singupElements } from "./singup.elements";

export class singupMethods{
  static inserUsername(username){
    singupElements.textboxes.username.invoke('val',username);
  }

  static inserpassword(password){
    singupElements.textboxes.password.invoke('val',password);
  }

  static clickOnSingupButton(){
    singupElements.button.singup.click();
  }

  static clickOnSingupCloseButton(){
    singupElements.button.close.click();
  }

  static singup(username, password){
    this.inserUsername(username)
    this.inserpassword(password)
    this.clickOnSingupButton();
  }

  static verifyAlertMessege(expectedMessage){
    cy.wait(1000)
    commonPageMethods.verifyTextAlert(expectedMessage)
  }
};