describe("sign in",()=>{

  it("locken in",()=>{


      cy.visit("https://app.lockene.net/");
      cy.get("#email").type("demo@lockene.us");
      cy.get("#password").type("Demo@123");
      cy.get("#submit-btn").click();
      
}) 
})