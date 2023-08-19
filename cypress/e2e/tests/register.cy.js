
import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { singupMethods } from "../pages/singup/singup.methods";
import { Logger } from "../util/logger";

const user = commonPageMethods.generateRandomString()
const password = commonPageMethods.generateRandomString(7)
const existingUser = "platano"


describe(commonPageData.testSuites.registro,()=>{
  it("Registro de usuario valido",()=>{
    Logger.stepNumber(1)
    Logger.step("Navegar a la pagina de inicio")
    commonPageMethods.navegateToDemoBlaze()

    Logger.stepNumber(2)
    Logger.step("Hacer click en el 'Sing up' ")
    commonPageMethods.clickOnSingupOption()

    Logger.stepNumber(3)
    Logger.step("Completar los campos con informacion valida' ")
    singupMethods.inserUsername(user)
    singupMethods.inserpassword(password)
   
   
    Logger.stepNumber(4)
    Logger.step('Hacer click en el boton "Sing up" ')
    singupMethods.clickOnSingupButton()
    Logger.verification("Veridicar mensaje de alerta 'Sign up successful.' ")
    singupMethods.verifyAlertMessege("Sign up successful.")

    
    
  })
// Registro de usuario inválido
  it("Registro de usuario invalido",()=>{
    Logger.stepNumber(1)
    Logger.step("Navegar a la pagina de inicio")
    commonPageMethods.navegateToDemoBlaze()

    Logger.stepNumber(2)
    Logger.step("Hacer click en el 'Sing up' ")
    commonPageMethods.clickOnSingupOption()

    Logger.stepNumber(3)
    Logger.step("Completar los campos con informacion invalida' ")
    singupMethods.inserUsername(existingUser)
    singupMethods.inserpassword(password)
  
   
    Logger.stepNumber(4)
    Logger.step('Hacer click en el boton "Sing up" ')
    singupMethods.clickOnSingupButton()
    Logger.verification("Veridicar mensaje de alerta 'This user already exist.' ")
    singupMethods.verifyAlertMessege("This user already exist.")
  

    
    
  })
})


