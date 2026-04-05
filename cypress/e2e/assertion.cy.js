// const { describe } = require("mocha");

describe ("assertion demo",()=>{

it("IMPLICT",()=>{

      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.url().should('include','orangehrmlive.com')
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')





})






})