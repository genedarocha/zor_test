

// Original Version Improved - v1



given("the user has the correct credentials", () => {


  cy.visit('https://sprinkle-burn.glitch.me/')
  console.log("Visiting Main Site - https://sprinkle-burn.glitch.me/")
  
  cy.title().should('eq', 'Worlds Best App')   // Check that title of page is correct with an assertion
  console.log("Assertion - Checking that title should equal Worlds Best App")


});

when("the user enters username", () => {
  cy.get( "#username" ).focus().clear().type("test@drugd") // Enter your Username / Email
 // throw new Error("Not implemented");
});

then("the user enters password", () => {

  cy.get( "#password" ).focus().clear().type("Testing123!") // Enter your Password

 // throw new Error("Not implemented");
});

then("clicks Login", () => {
  cy.get( "button[class=\"btn btn-default button button-medium\"]" ).eq( 0 ).click() // Click on Login button to login 

 //  throw new Error("Not implemented");
}); 

then("the user is presented with a welcome message", () => {

  cy.get("article[class=\"pa4 black-80 content\"]").should('eq', 'Welcome Dr I Test') // Check that the welcome text after login = Welcome Dr I Test an assertion
  console.log("Check that the welcome text = Welcome Dr I Test an assertion")
 // throw new Error("Not implemented");
});




given("the user has the incorrect credentials", () => {


  cy.visit('https://sprinkle-burn.glitch.me/')
  console.log("Visiting Main Site - https://sprinkle-burn.glitch.me/")
  
  cy.title().should('eq', 'Worlds Best App')   // Check that title of page is correct with an assertion
  console.log("Assertion - Checking that title should equal Worlds Best App")


});

when("the user enters username", () => {
  cy.get( "#username" ).focus().clear().type("test@drugd") // Enter your Username / Email
 // throw new Error("Not implemented");
});

then("the user enters password", () => {

  cy.get( "#password" ).focus().clear().type("Testing123!") // Enter your Password

 // throw new Error("Not implemented");
});

then("clicks Login", () => {
  cy.get( "button[class=\"btn btn-default button button-medium\"]" ).eq( 0 ).click() // Click on Login button to login 

 //  throw new Error("Not implemented");
}); 

then("the user is presented with a error message", () => {

  cy.get("article[class=\"pa4 black-80 content\"]").should('eq', 'Welcome Dr I Test') // Check that the welcome text after login = Welcome Dr I Test an assertion
  console.log("Check that the welcome text = Welcome Dr I Test an assertion")
 // throw new Error("Not implemented");
});
