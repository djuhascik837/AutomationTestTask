/// <reference types="cypress" />

context('Test Case 3 - Blue Button test', () => {
  beforeEach(() => {

    cy.intercept({
      url: "**/challenging_dom",
      method: 'GET'
    }).as("mainPage");

    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  })

  it('Click Blue Button and check new answer a=has been generated', () => { 
      
    cy.wait("@mainPage").then(({response}) => { //This waits for the mainPage call before moving onto the next step, ensuring site is loaded.
      expect(response.statusCode).to.equal(200);
      const respBody = response.body;
      //console.log(respBody);
      
      cy.get('#canvas').then(($span) => {
        const ans = $span.text();
        cy.log(ans);
        console.log(ans);
      })
      

      cy.pause()
      cy.get('.large-2').first().click()

    })
  })
})