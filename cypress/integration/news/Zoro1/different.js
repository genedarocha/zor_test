import { Given, Then, Before } from "cypress-cucumber-preprocessor/steps";

const url = "https://zoro.co.uk/login";

let myBeforeCount = 0;

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


Before(() => {
 // expect(myBeforeCount).to.be.lessThan(2);
//  myBeforeCount += 1;
});

Given(`I kinda open Zoro page`, () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it('Does not catch script error', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      throw err
    })
  
    cy.visit(url);



  })
 
});


Then(`I am very happy`, () => {
  cy.title().should("include", "Zoro");
});

