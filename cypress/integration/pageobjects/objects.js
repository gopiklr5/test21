

  //export const loginlink = () => cy.get('a[id="loginLink"]');



export class objects{

    loginlink = () => cy.get('a[id="loginLink"]');

  visit(){
    cy.visit('http://eaapp.somee.com/')

  }
  enterdetails(){        
        loginlink().click();
        cy.get('label').contains('Password').should('be.visible');
        cy.get('input[name="UserName"]',{timeout:6000}).should('be.visible');
        cy.get('input[name="UserName"]').type('admin');
        cy.get('input[name="Password"]').type('password');
        cy.get('input[value="Log in"]').click();
  }
}
export const loginPage = new objects(); 