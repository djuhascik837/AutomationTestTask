/// <reference types="cypress" />

context('Test Case 7 - Check table results', () => {
    beforeEach(() => {
  
      cy.intercept({
        url: "**/challenging_dom",
        method: 'GET'
      }).as("mainPage");
  
      cy.visit('https://the-internet.herokuapp.com/challenging_dom');
    })
  
    it('Check that the results within the table match', () => { 
        
      cy.wait("@mainPage").then(({response}) => { //This waits for the mainPage call before moving onto the next step, ensuring site is loaded.
        expect(response.statusCode).to.equal(200);

        //checks the first result within the table
        cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Iuvaret0');
        //checks a result from the second column within the table
        cy.get(':nth-child(5) > :nth-child(2)').contains('Apeirian4');
        cy.get(':nth-child(7) > :nth-child(3)').contains('Adipisci6');
        cy.get(':nth-child(4) > :nth-child(4)').contains('Definiebas3');
        cy.get(':nth-child(10) > :nth-child(5)').contains('Consequuntur9');
        cy.get('tbody > :nth-child(2) > :nth-child(6)').contains('Phaedrum1')
        
      })
    })
  })