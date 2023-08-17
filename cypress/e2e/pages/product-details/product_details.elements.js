export class ProductDetails_Elements {
 
  static get buttons() {
    return {
      get addTocart() {
        return cy.contains('a', 'Add to cart')
      }
    }
  }

 
}