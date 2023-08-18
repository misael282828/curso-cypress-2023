export class PurchaseElements {

  static get buttons() {

    return {
      get ok() {
        return cy.contains("button", "OK")
      }
    }
  };

  

  static get icon() {
    return {
      get greenCheckMark(){
        return cy.get(".sa-success")
      }
    }
  };


}