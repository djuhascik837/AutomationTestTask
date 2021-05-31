/// <reference types="cypress" />

context('Test Case 3 - Blue Button test', () => {
  beforeEach(() => {

    cy.intercept({
      url: "**/challenging_dom",
      method: 'GET'
    }).as("mainPage");

    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  })

  it('Click Blue Button and print the text from the button', () => { 
      
    cy.wait("@mainPage").then(({response}) => { //This waits for the mainPage call before moving onto the next step, ensuring site is loaded.
      expect(response.statusCode).to.equal(200);

      /*
      The code below was from an attempt of me trying to extract the number 
      from the answer window however I was unable to get this working
      const respBody = response.body;
      console.log(respBody);
      */

      //Checks the text within the button
      cy.get('.button').first().invoke('text').then((text) => {
        console.log("Blue button before click: " + text);
      })
      //Clicks the blue button
      cy.get('.button').first().click();

      //Checks the text within the button after its clicked
      cy.get('.button').first().invoke('text').then((text) => {
        console.log("Blue button after click: " + text);
      })
      

    })
    //if site has reloaded then new number has been generated.
    cy.wait("@mainPage").then(({response}) => { 
      expect(response.statusCode).to.equal(200);
    });
  })
})

context('Test Case 4 - Red Button test', () => {
  beforeEach(() => {

    cy.intercept({
      url: "**/challenging_dom",
      method: 'GET'
    }).as("mainPage");

    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  })

  it('Click Red Button and print the text from the button', () => { 
      
    cy.wait("@mainPage").then(({response}) => { //This waits for the mainPage call before moving onto the next step, ensuring site is loaded.
      expect(response.statusCode).to.equal(200);

      //Checks the text within the button
      cy.get('.button.alert').invoke('text').then((text) => {
        console.log("Red button before click: " + text);
      })
      //Clicks the blue button
      cy.get('.button.alert').click();

      //Checks the text within the button after its clicked
      cy.get('.button.alert').invoke('text').then((text) => {
        console.log("Red button after clicked: " + text);
      })
      

    })
    //if site has reloaded then new number has been generated.
    cy.wait("@mainPage").then(({response}) => { 
      expect(response.statusCode).to.equal(200);
    });
  })
})

context('Test Case 5 - Green Button test', () => {
  beforeEach(() => {

    cy.intercept({
      url: "**/challenging_dom",
      method: 'GET'
    }).as("mainPage");

    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  })

  it('Click Green Button and print the text from the button', () => { 
      
    cy.wait("@mainPage").then(({response}) => { //This waits for the mainPage call before moving onto the next step, ensuring site is loaded.
      expect(response.statusCode).to.equal(200);

      //Checks the text within the button
      cy.get('.button.success').invoke('text').then((text) => {
        console.log("Green button before click: " + text);
      })
      //Clicks the blue button
      cy.get('.button.success').click();

      //Checks the text within the button after its clicked
      cy.get('.button.success').invoke('text').then((text) => {
        console.log("Green button after clicked: " + text);
      })
      

    })
    //if site has reloaded then new number has been generated.
    cy.wait("@mainPage").then(({response}) => { 
      expect(response.statusCode).to.equal(200);
    });
  })
})

