describe("alert",()=>{

  it("simple alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click();
    cy.on('window:alert',(t)=>{

        expect(t).to.contains('I am a JS Alert');
    }
)








  })




})