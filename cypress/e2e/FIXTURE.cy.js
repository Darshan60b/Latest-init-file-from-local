

describe("use fixture",()=>{

it("fix",()=>{


     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     cy.fixture('orange.json').then( (data)=>{

         cy.get("input[placeholder='Username']").type(data.name)
         cy.get("input[placeholder='Password']").type(data.password)
         cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',"Dashboard");
           } )


     })




     })
    






    





