import { ProductDetails_Elements } from "./product_details.elements";

export class ProductDetails_Methods{
  
  static clickOnAddToCartButton(){
    ProductDetails_Elements.buttons.addTocart.click()
  }

  static verifyProductDetailsPageDisplayed(){
    ProductDetails_Elements.buttons.addTocart.should("be.visible")
  }
}