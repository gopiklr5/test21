/// <reference types="cypress" />


import {LogPage} from '../objects/pageobject.js';
import {Empage} from '../objects/EmpPage.js';



describe('suitename ', () => {
  


    it('first test script', () => {
      LogPage.visit();
      LogPage.clickLoginbtn();
      LogPage.enterdetails();
      LogPage.clicksubmitbtn();
  


    })

    it('second test script', () => {
      
     

    })


})
