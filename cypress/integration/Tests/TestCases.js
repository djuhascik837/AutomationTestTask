/// <reference types="cypress" />

context('Test Case 1 and 2', () => {
  beforeEach(() => {

    cy.intercept({
      url: "**/challenging_dom",
      method: 'GET'
    }).as("mainPage");

    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  })

  it('Click Edit and delete hyperlinks', () => { 
      
    cy.wait("@mainPage").then(({response}) => { //This waits for the mainPage call before moving onto the next step, ensuring site is loaded.
      expect(response.statusCode).to.equal(200);

      //this clicks the refrenced button and checks URL has changed
      cy.clickBtn(":nth-child(1) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(1) > :nth-child(7) > [href='#delete']", "#delete");

      cy.clickBtn(":nth-child(2) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(2) > :nth-child(7) > [href='#delete']", "#delete");

      cy.clickBtn(":nth-child(3) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(3) > :nth-child(7) > [href='#delete']", "#delete");

      cy.clickBtn(":nth-child(4) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(4) > :nth-child(7) > [href='#delete']", "#delete");

      cy.clickBtn(":nth-child(5) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(5) > :nth-child(7) > [href='#delete']", "#delete");

      cy.clickBtn(":nth-child(6) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(6) > :nth-child(7) > [href='#delete']", "#delete");

      cy.clickBtn(":nth-child(7) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(7) > :nth-child(7) > [href='#delete']", "#delete");

      cy.clickBtn(":nth-child(8) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(8) > :nth-child(7) > [href='#delete']", "#delete");

      cy.clickBtn(":nth-child(9) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(9) > :nth-child(7) > [href='#delete']", "#delete");

      cy.clickBtn(":nth-child(9) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(9) > :nth-child(7) > [href='#delete']", "#delete");

      cy.clickBtn(":nth-child(10) > :nth-child(7) > [href='#edit']", "#edit");
      cy.clickBtn(":nth-child(10) > :nth-child(7) > [href='#delete']", "#delete");

    })
  })
})