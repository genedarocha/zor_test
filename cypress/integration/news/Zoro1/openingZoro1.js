import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://zoro.co.uk/login";

Given(`I open Zoro page`, () => {
  cy.visit(url);
});
