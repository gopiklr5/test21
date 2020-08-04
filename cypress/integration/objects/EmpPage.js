/// <reference types="cypress" />

export const loginlink = () => cy.get('a[id="loginLink"]');
export const username = () => cy.get('input[id="UserName"]');
export const password = () =>  cy.get('input[id="Password"]');
export const submit = () =>  cy.get('input[type="submit"]');

  class EmpPage{

    visit(){
        cy.visit(Cypress.env('url'));

};


clickLoginbtn(){

    loginlink().click(); 
};


  }


  export const Empage = new EmpPage();