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
    this.insertUserName(username)
    this.insertPassoword(password)
    this.clickOnLoginButton()
  }

  // static insertUserNameSingIn(username){
  //   LoginElements.texboxes.usernameSingIn.type(username)
  // }

  // static insertUserPassSingIn(username){
  //   LoginElements.texboxes.usernamePassSingIn.type(username)
  // }
}