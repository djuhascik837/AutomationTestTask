/// <reference types="cypress" />

context('Test Case 1', () => {
  beforeEach(() => {

    cy.intercept({
      url: "**/challenging_dom",
      method: 'GET'
    }).as("mainPage");

    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  })

  it('Click Edit hyperlink', () => { 
      
    cy.wait("@mainPage").then(({response}) => { //This waits for the mainPage call before moving onto the next step, ensuring site is loaded.
      expect(response.statusCode).to.equal(200);
      cy.get('[href="#edit"]').first().click(); //click first edit button
      
      //This checks that the URL has changed to #edit
      cy.on("url:changed", (newUrl) => {
        expect(newUrl).to.contain("#edit")
      })

    })
  })
})