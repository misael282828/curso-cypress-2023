import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { singupMethods } from "../pages/singup/singup.methods";
import { Logger } from "../util/logger";

describe(commonPageData.testSuites.registerAndAutentication,()=>{
  it("Registro de usuario valido",()=>{
    Logger.stepNumber(1)
    Logger.step("Navegar a la pagina de inicio")
    commonPageMethods.navegateToDemoBlaze()

    Logger.stepNumber(2)
    Logger.step("Hacer click en el 'Sing up' ")
    commonPageMethods.clickOnSingupOption()

    Logger.stepNumber(3)
    Logger.step("Completar los campos con informacion valida' ")
    singupMethods.inserUsername("pollo santana")
    singupMethods.inserpassword("pass")
   
    Logger.stepNumber(4)
    Logger.step('Hacer click en el boton "Sing up" ')
    singupMethods.clickOnSingupButton()
  


    Logger.verification("Veridicar mensaje de alerta 'Sign up successful.' ")
    singupMethods.verifyAlertMessege("Sign up successful.")

    // singupMethods.singup("Rojo vino", "pass")
    
  })
})


