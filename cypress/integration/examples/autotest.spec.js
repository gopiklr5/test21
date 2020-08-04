/// <reference types="cypress" />


    describe('test suite', ()=>{


        it('test case01', ()=>{

            cy.visit(Cypress.env('url'));         
            cy.xpath('//a[@id="loginLink"]').click(); 
             
          //  cy.fixture('example.json').as('$data');

          //  cy.get('@$data').then((data)=>{
                cy.get('input[id="UserName"]').type(Cypress.env('usrn'));
              cy.get('input[id="Password"]').type(Cypress.env('pass'));
          //  })

            
            cy.get('input[type="submit"]').click();
            cy.contains('Employee List').click();
            cy.get('table[class="table"]').should('be.visible');


                    




            cy.get('table[class="table"]').find('td').as('tdata');


            cy.get('@tdata').then(($tdata)=>{

                cy.fixture('example.json').as('empname');
                cy.get('@empname').then(($emname)=>{
              cy.wrap($tdata).contains($emname.EmpName).parent().contains('Edit').click();
            })
        })
           // cy.get('table[class="table"]').find('td').contains('James').parent().contains('Edit').click();



        })

        



    
        })


    