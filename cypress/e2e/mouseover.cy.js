

describe("mousevnet",()=>{




it("mouseiver",()=>{

 cy.visit("https://practice.expandtesting.com/#tools");
 cy.get("#examples-dropdown").trigger('mouseover').click();
 cy.get("li[class='nav-item dropdown col-6 col-md-auto'] li:nth-child(1) a:nth-child(1)").should("be.visible");





})
 it.only("drag and drop",()=>{
 cy.visit("https://www.globalsqa.com/demo-site/draganddrop/")
 cy.get("img[alt='The peaks of High Tatras']").drag('#trash');







 })



















})