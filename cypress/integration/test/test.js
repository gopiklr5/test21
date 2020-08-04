
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"



Given('I visit Page', ()=>{

    cy.visit(Cypress.env('url'));         
    cy.xpath('//a[@id="loginLink"]').click(); 

})

Given('I enter details', ()=>{
    cy.get('input[id="UserName"]').type(Cypress.env('usrn'));
    cy.get('input[id="Password"]').type(Cypress.env('pass'));
    
})

And('I click on btn', ()=>{
    cy.get('input[type="submit"]').click();
    
})