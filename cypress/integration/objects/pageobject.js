/// <reference types="cypress" />


export const loginlink = () => cy.get('a[id="loginLink"]');
export const username = () => cy.get('input[id="UserName"]');
export const password = () =>  cy.get('input[id="Password"]');
export const submit = () =>  cy.get('input[type="submit"]');

  class pageobject{


        visit(){
                cy.visit(Cypress.env('url'));

        };


        clickLoginbtn(){

            loginlink().click(); 
        };


        enterdetails(){

            username().type(Cypress.env('usrn'));
            password().type(Cypress.env('pass'));
        };


        clicksubmitbtn(){

            submit().click();   

        };
                

  }


  export const LogPage = new pageobject(); 