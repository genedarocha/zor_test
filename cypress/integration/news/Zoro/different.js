import { Given, Then, Before } from "cypress-cucumber-preprocessor/steps";

const url = "https://zoro.co.uk/login";

let myBeforeCount = 0;



Before(() => {
  expect(myBeforeCount).to.be.lessThan(2);
  myBeforeCount += 1;
});

Given(`I kinda open Zoro page`, () => {

    cy.visit(url);

 
});


Then(`I am very happy`, () => {
  cy.title().should("include", "Zoro");
});

