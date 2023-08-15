import { Logger } from "../../util/logger";
import { LoginElements } from "./login.elemets";

export class LoginMethods{
  static insertUserName(username){
    LoginElements.texboxes.username.invoke("val",username)
  }
  static insertPassoword(password){
    LoginElements.texboxes.password.invoke('val',password)
  }
  static clickOnLoginButton(){
    LoginElements.buttons.login.click()
  }

  static login(username, password){
    Logger.subStep('Insert username')
    this.insertUserName(username)
    Logger.subStep('Insert password')
    this.insertPassoword(password)
    Logger.subStep('Click on login button')
    this.clickOnLoginButton()
  }

}