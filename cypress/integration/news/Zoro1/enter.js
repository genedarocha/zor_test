import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://zoro.co.uk/login";

Given(`I Enter EmailAddress`, () => {
  
      // Enter Username 
      cy.get('input[name=email]').type('test150420@gmail.com')
});

Then (`I Enter Password`, () => {
        cy.get('input[name=password]').type('9999999') // Enter your password
      //  cy.get('input[type=submit]').click()// click on login button
      cy.get( "button[class^=\"button-primary loginButtonContainer__btn\"]" ).click() 
});

