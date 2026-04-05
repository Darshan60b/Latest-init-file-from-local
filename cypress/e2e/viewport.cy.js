

describe("viewport",()=>{
    beforeEach(() => {
    
    cy.visit('https://dev.tinyview.com/');
  });

  it("view on i phone 13",()=>{
     cy.viewport('macbook-15')
     cy.screenshot() 
     cy.wait(2000)




  })


it("view on andriod",()=>{


cy.viewport(360, 740); 
cy.scrollTo('bottom');



})
it("view on windows",()=>{

cy.viewport(1920, 1080); 
cy.screenshot()
cy.wait(2000)



})



})