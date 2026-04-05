
describe("sign in",()=>{

  it("locken in",()=>{


      cy.visit("https://app.lockene.net/");
      cy.get("#email").type("demo@lockene.us");
      cy.get("#password").type("Demo@123");
      cy.get("#submit-btn").click();
      cy.get(".fw-bold.my-3").should("have.text","Select Industries");
}) 
   

// it("invalid input",()=>{



//  cy.visit("https://app.lockene.net/");
//       cy.get("#email").type("demo@lockene.us");
//       cy.get("#password").type("1234");
//       cy.get("#submit-btn").click();
//       cy.on('window:alert',(a)=>{
//         expect(a).to.contains("Incorrect email or password");
//       })


// })
//    it.only("empty field",()=>{

        
// cy.visit("https://app.lockene.net/");
//       cy.get("#email")
//       cy.get("#password").type("1234");
//       cy.get("#submit-btn").click();
//           cy.get('#email').then(($input) => {
//       expect($input[0].validationMessage).to.eq('Please fill out this field.')


//    })
   


//    })











})