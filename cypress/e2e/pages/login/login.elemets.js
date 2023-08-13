export class LoginElements{
  static get texboxes(){
    return {
      get username(){
        return cy.get('input#loginusername')
        
      },

      get password(){
        return cy.get('input#loginpassword')
      },
      get usernameSingIn(){
        return cy.get('input#loginusername')
        
      },
      get usernamePassSingIn(){
        return cy.get('input#sign-password')
        
      },


    }
  }

  static get buttons(){
    return {
      get close(){
        return cy.get('div[id="logInModal"] button').eq(1)
      },
      get login(){
        return cy.contains('button', 'Log in')
        
      }


    }
   
  }
}