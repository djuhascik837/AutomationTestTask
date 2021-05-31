/// <reference types="cypress" />

context('Test Case 6 - Click "Powered by Elemental Selenium" hyperlink', () => {
    beforeEach(() => {
  
      cy.intercept({
            url: "**/challenging_dom",
            method: 'GET'
        }).as("mainPage");
  
      cy.visit('https://the-internet.herokuapp.com/challenging_dom');
    })
  
    it('Click "Powered by Elemental Selenium" hyperlink', () => { 
        
      cy.wait("@mainPage").then(({response}) => { //This waits for the mainPage call before moving onto the next step, ensuring site is loaded.
        expect(response.statusCode).to.equal(200);
      })

      cy.get('.large-4 > div > a').should('have.attr', 'target', '_blank')
  
    })
  })