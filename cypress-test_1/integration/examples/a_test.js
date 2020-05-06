/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://sprinkle-burn.glitch.me/')
    console.log("Visiting Main Site - https://sprinkle-burn.glitch.me/")
  
  })

  it('Logging In', () => {





    cy.title().should('eq', 'Worlds Best App')   // Check that title of page is correct with an assertion
    console.log("Assertion - Checking that title should equal Worlds Best App")


    cy.get("article[class=\"pa4 black-80 content\"]").should('eq', 'Welcome Dr I Test') // Check that the welcome text after login = Welcome Dr I Test an assertion
    console.log("Check that the welcome text = Welcome Dr I Test an assertion")

    //xxx

    cy.get('[pa4 black-80 content="2"]').eq( 0 ).click()   // Check that the product id is 2 for right product (blouse
    console.log("Check that the welcome text = Welcome Dr I Test an assertion")

    cy.get('#layer_cart').click()   // Click onto the Cart mini window page
    console.log("Click on the layer ")
      
   
    cy.get("a[class=\"btn btn-default button button-medium\"]").eq(0).click()   // Click on the window setup account

    cy.get('#cart_quantity_up_2_7_0_0').click()         // Add a Quantity x 1
    cy.get('#cart_quantity_up_2_7_0_0').click() .wait( 1000 )        // Add a Quantity x 1 (2 in total) 
    
    cy.get('#cart_quantity_down_2_7_0_0').click()         // Remove a Quantity x 1
    cy.get('#cart_quantity_down_2_7_0_0').click()         // Remove a Quantity x 1 (2 in total) 




//  New Bits 

     cy.get( "td[class=\"cart_product\"]" ).click()   // click on image to get more details on the producty

     cy.get( "div[class=\"attribute_list\"]" ).eq(0).click()  // select the size selector

     cy.get( "div[class=\"attribute_list\"]" ).eq(0).click()  // change colour from black to white

     cy.get(' #color_to_pick_list') // change colour from black to white. 

     cy.get('#color_8').click() // change colour from black to white. 
 
     cy.get("#group_1").select('M') // change size from small to medium


     cy.get("a[class=\"login\"]").click()  // Click on the login page

  // cy.visit("http://automationpractice.com/index.php?controller=order")

  // cy.get("a[class=\"cart_item last_item first_item address_0 odd\"]").eq(0).click()        // click on link to show product in more detail

  // cy.get('#product_2_7_0_0').eq(0)
  // cy.get('cart_product').eq(0).click()

 //  cy.get('#order').click()  // click order row     
 
 
//  cy.get("button[class=\"button lnk_view btn btn-default\"]").click() .eq( 0 ).click().wait( 1000 ) // click on More to change some details

// end of News Bits

   cy.get( "#email_create" ).focus().clear().type( 
     "genedarocha+1062@gmail.com" )  // Enter an Email address (ideally should create a new number everytime test is run)

   cy.get( "button[class^=\"button-primary loginButtonContainer__btn\"]" ).click()  // Clock on create new account submit button , wait for 1000 for page to load (just in case) not usually requiered  
   button-primary loginButtonContainer__btn  
 //   cy.get('.id_gender1 [type="checkbox"]').not('[disabled]')  // Enter the Mr box which should be checked 
 //   .check().should('Mr')

    cy.title().should('eq', 'Login - My Store')   // Check that title of page is correct with an assertion
    cy.get( "#customer_firstname" ).focus().clear().type("Gene")// Enter your first name

    cy.get( "#customer_lastname" ).focus().clear().type("DaRocha") // Enter your last name
    cy.get( "#passwd" ).focus().clear().type("Testing123!") // Enter your password

    cy.get("#days").select('1') // DOB - Days
    cy.get("#months").select('January') // DOB - Months
    cy.get("#years").select('1990') // DOB - Years

    cy.get('#newsletter')  // Check for Newsletters
    .check().should('be.checked')
   
    cy.get('#optin')  // Check for addtional partners
    .check().should('be.checked')
   

    cy.get( "#company" ).focus().type("Automation Testing") // Enter your company
    
    cy.get( "#address1").focus().type("10 Mead Way") // Address 1
    cy.get( "#address2").focus().type("Pimlico") // Address 2
    cy.get( "#city" ).focus().type("Beverley Hills") // City
    cy.get("#id_state").select("California") // State
    cy.get("#postcode").focus().type("90210") // Post Code
    cy.get( "#other" ).focus().type("None") // Other
    cy.get( "#phone" ).focus().type("408-234-8379") // Phone
    cy.get( "#phone_mobile" ).type("310-449-8449") // Mobile Phone
    cy.get( "#alias" ).focus().type("DaRocha") // Alias Info


    cy.get( "button[class=\"btn btn-default button button-medium\"]" ).eq( 0 ).click() // Clock on create new account submit button

     

    // #center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium
    // cy.get("a[class^=\"loginButton\"]").click()

    // cy.get('.p.cart_navigation.clearfix')
    // cy.contains("Proceed to checkout").click()

    cy.get("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium").click() //Proceed to checkout
    cy.get("#center_column > form > p > button").click() //Proceed to checkout

    cy.get('#cgv')  
    .check().should('be.checked') // Agree to Terms and Conditions

    cy.get("#form > p > button").click() // Proceed to Checkout and Complete process to buy 

    cy.get("#HOOK_PAYMENT").contains("Pay by bank wire").eq(0).click() // Final Wire Payment
  //   cy.get( "div[class=\"bankwire\"]" ).eq(0).click()  // Final Wire Payment

  cy.get("#cart_navigation > button").click() // confirm my order
  
   // #HOOK_PAYMENT > div:nth-child(1) > div > p > a



  //  cy.get("#HOOK_PAYMENT").eq(0).click() // Final Wire Payment 
// cy.get( "div[class=\"payment_module\"]" ).eq(0).click()  // Final Wire Payment 

  //  cy.get("#cart_navigation > button").click() // Finish Transaction    

   // #HOOK_PAYMENT > div:nth-child(1) > div > p > a
  //  cy.get("#address_invoice > li.address_update > a").click() //Update Address 

 //   cy.get("#submitAddress").click()// Press Save and move on
    
  ///  cy.get("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium").click() //Proceed to checkout


  //   .find('a.button.btn.btn-default.standard-checkout.button-medium')
  //   // finds first <td> element with text content matching regular expression
  //   .contains('Proceed to')
  //   .should('be.visible')


  //  //  cy.get( "button[class=\"btn btn-default button standard-checkout button-medium\"]" ).eq( 0 ).click() //Proceed to checkout
  //  // #center_column > p.cart_navigation.clearfix > § > span
  //  // #center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium
  })
})
