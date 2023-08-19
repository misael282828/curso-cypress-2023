export class HomeElements{
  static get categoriesMenu(){
    return {
      get phones(){
        return cy.contains('a', 'Phones')
      },
      get laptops(){
        return cy.contains('a', 'Laptops')
      },
      get monitors(){
        return cy.contains('a', 'Monitors')
      }
    }
  };
    // busca el por el nombre del producto
  static product(productName){
    return cy.contains('a', productName, {timeout: 30000})
   // return cy.contains('a', productName, {timeout: 30000})

  }
//{timeout: 30000} es tiempo maximo de espera del elemento con ese nombre
}