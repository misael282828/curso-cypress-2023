export class commonPageElements{

  static get topMenu(){
    return {
      get home(){
        return cy.contains('a', "Home")
      },

      get contact(){
        return cy.contains('a',"Contact")
      },

      get aboutUs(){
        return cy.contains('a', "About Us")
      },

      get cart(){
        return cy.contains('a', "Cart")
      },

      get login(){
        return cy.contains('a', "Log in")
      },

      get singup(){
        return cy.contains('a', "Sign up")
      },
      get logout(){
        return cy.get("#logout2")
      }
    }

   
  }

  static get signedUp(){
    return cy.get('a#nameofuser')
  }

  

}