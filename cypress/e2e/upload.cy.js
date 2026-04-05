import 'cypress-file-upload'
describe("file upload",()=>{

it("first",()=>{


cy.visit("https://the-internet.herokuapp.com/upload");
cy.get("#file-upload").attachFile('sheetal second resume.pdf');
cy.get("#file-submit").click();
cy.wait(5000)
cy.get("div[class='example'] h3").should('have.text','File Uploaded!');




})







})