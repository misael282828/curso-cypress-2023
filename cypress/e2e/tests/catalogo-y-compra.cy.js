import { CartMethods } from "../pages/cart/cart.methods";
import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { placeOrderData } from "../pages/place-order/place-order.data";
import { placeOrderMethods } from "../pages/place-order/place-order.methods";
import { ProductDetails_Methods } from "../pages/product-details/product_details.methods";
import { PurchaseMethods } from "../pages/thankyou-purchase/purchaseMethods";




import { Logger } from "../util/logger";

const user = LoginData.validCredential;
const product = "ASUS Full HD"
describe(commonPageData.testSuites.catalogoycompras,()=>{
  it('Navegacion por categoria', () => {
   
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

  
  it('Agregar producto al carrito', () => {
   
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

    Logger.stepNumber(3)
    Logger.step(" Seleccionar una categoría de productos en el menú de navegación")
    HomeMethods.clickOnMonitorsOption()

    Logger.stepNumber(4)
    Logger.step("Hacer click en un product especifico")
    HomeMethods.clickOnProduct(product)

    Logger.stepNumber(5)
    Logger.verification("Verificar que se muestra la página de detalles del producto.")
    ProductDetails_Methods.verifyProductDetailsPageDisplayed()
   
    Logger.stepNumber(6)
    Logger.verification("Hacer click en el boton 'Add to cart' ")
    ProductDetails_Methods.clickOnAddToCartButton()

    Logger.stepNumber(7)
    Logger.verification(" Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.")

    commonPageMethods.verifyTextAlert("Product added.")
    commonPageMethods.clickOnCartOption()
    CartMethods.verifyProductAdded(product)

  });


  it('Realizar una compra', () => {
   
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

    Logger.stepNumber(3)
    Logger.step(" Seleccionar una categoría de productos en el menú de navegación")
    HomeMethods.clickOnMonitorsOption()

    Logger.stepNumber(4)
    Logger.step("Hacer click en un product especifico")
    HomeMethods.clickOnProduct(product)

    Logger.stepNumber(5)
    Logger.verification("Verificar que se muestra la página de detalles del producto.")
    ProductDetails_Methods.verifyProductDetailsPageDisplayed()
   
    Logger.stepNumber(6)
    Logger.verification("Hacer click en el boton 'Add to cart' ")
    ProductDetails_Methods.clickOnAddToCartButton()

    Logger.stepNumber(7)
    Logger.verification(" Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.")

    commonPageMethods.verifyTextAlert("Product added.")
    commonPageMethods.clickOnCartOption()
    CartMethods.verifyProductAdded(product)


    Logger.stepNumber(8)
    Logger.verification("Hacer click en el opcion 'Cart' de la barrar de navegacion ")
    commonPageMethods.clickOnCartOption()

    Logger.stepNumber(9)
    Logger.verification("Verificar que se muestre la pagina del carrito de compras ")
    CartMethods.verifiCartPageIsShow()

    Logger.stepNumber(10)
    Logger.verification("Hacr click en place order")
    CartMethods.clickOnPlaceOrderButton()

    Logger.stepNumber(11)
    Logger.verification("Completar los campos obligatorios en la informacion de envio")
    placeOrderMethods.inserOrderInformation(placeOrderData.testData)

    Logger.stepNumber(12)
    Logger.verification("Hacr click en place order")
    placeOrderMethods.clickOnPurchaseButton()

    
    Logger.stepNumber(13)
    Logger.verification("Verificar que se muestre el mensaje de confirmacion y redirige a la parina de inicio")
    // cy.wait(3000)
    PurchaseMethods.greenMarkDisplayed()
    cy.wait(3000)
    PurchaseMethods.clickOnOkButton()
    PurchaseMethods.lol()
    commonPageMethods.verifiUrlName('index.html')





    
  });
})

//cypress run --spec "cypress/e2e/tests/catalogo-y-compra.cy.js" --browser chrome --headed
