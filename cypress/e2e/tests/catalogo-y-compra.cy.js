import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredential;
describe.only(commonPageData.testSuites.catalogoycompras,()=>{
  it.only('Navegacion por categoria', () => {
   
    Logger.stepNumber(1)
    Logger.step("Navegar a la pagina de inicio")
    Logger.subStep("Navegate to demoblaze")
    commonPageMethods.navegateToDemoBlaze()
    Logger.subStep("Click on 'login in' link ")
    commonPageMethods.clickOnloginOption()
    LoginMethods.login(user.username, user.password)


    Logger.stepNumber(2)
    Logger.step("Navegar a la pagina de inicio")
    commonPageMethods.clickOnHomeOption()

    Logger.stepNumber(2)
    Logger.step(" Seleccionar una categoría de productos en el menú de navegación")
    HomeMethods.clickOnMonitorsOption()
    Logger.verification("Verificar que se muestra la lista de productos correspondiente a la categor seleccionada.")
    // HomeMethods.verifyProductIsDisplay("Apple monitor 24")
    // HomeMethods.verifyProductIsDisplay("ASUS Full HD")
    
    // validar si esta clase esta presente 2 veces, indicando los articulos que tiene esta clase  
    cy.get(".card-img-top").should("have.length", 2);

  });
})

//cypress run --spec "cypress/e2e/tests/catalogo-y-compra.cy.js" --browser chrome --headed
