import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { singupMethods } from "../pages/singup/singup.methods";
import { Logger } from "../util/logger";

const existinUser= LoginData.validCredential.username

describe(commonPageData.testSuites.autenticacion, ()=>{
  it("Inicio de sesion valido", ()=>{
    Logger.stepNumber(1)
    Logger.step("Navegar a la pagina de inicio")
    commonPageMethods.navegateToDemoBlaze()

    Logger.stepNumber(2)
    Logger.step("Hacer click en el 'Log in' ")
    commonPageMethods.clickOnloginOption()

    Logger.stepNumber(3)
    Logger.step("Completar los campos con informacion valida' ")
    LoginMethods.insertUserName(existinUser)
    LoginMethods.insertPassoword(LoginData.validCredential.password)

    
    Logger.stepNumber(4)
    Logger.step("Hacer click en el 'Log in' para iniciar sesion")
    LoginMethods.clickOnLoginButton()
    Logger.verification("Veridicar mensaje de alerta 'Welcome' ")
    commonPageMethods.verifySingedUser(existinUser)
  })

  it("Inicio de sesion invalido", ()=>{
    Logger.stepNumber(1)
    Logger.step("Navegar a la pagina de inicio")
    commonPageMethods.navegateToDemoBlaze()

    Logger.stepNumber(2)
    Logger.step("Hacer click en el 'Log in' ")
    commonPageMethods.clickOnloginOption()

    Logger.stepNumber(3)
    Logger.step("Completar los campos con informacion invalidas' ")
    LoginMethods.insertUserName(existinUser)
    LoginMethods.insertPassoword('invalidPass')

    
    Logger.stepNumber(4)
    Logger.step("Hacer click en el 'Log in' para iniciar sesion")
    LoginMethods.clickOnLoginButton()
    Logger.verification("Veridicar mensaje de alerta 'Wrong password.' ")
    singupMethods.verifyAlertMessege("Wrong password.")
  })



})