export class CartElements {
  static get buttons() {
    return {
      get placeOrder() {
        return cy.get('button[data-toggle="modal"]')
      }

    };
  };

  //cy.xpath('//td[text()="Samsung galaxy s6"]/ancestor::tr//a').click();
  //  //td[text()="Samsung galaxy s6"]/ancestor::tr//a


  static get links() {
    return {
      delete(productName) {
        return cy.contains('td', productName).closest('tr').find('a')
      }
    }
  }
}