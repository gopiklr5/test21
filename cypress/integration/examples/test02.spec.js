/// <reference types="cypress" />

describe('test suite', ()=>{


    it('Test login', ()=>{

        cy.visit("http://eaapp.somee.com/");
        cy.get('a').contains('Login').click();
    })
})