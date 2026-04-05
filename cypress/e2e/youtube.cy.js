// describe("youtibe comment ",()=>{

// it("search the viedo",()=>{

// cy.visit("https://www.youtube.com/");
// cy.wait(10000);
// cy.get('[name="search_query"]').type('Cypress automation tutorial');
// cy.get('.ytSearchboxComponentSearchButton').click();
// cy.wait(9000);
// cy.get('ytd-video-renderer', { timeout: 15000 })
//   .should('have.length.greaterThan', 1)  
//   .eq(1)                            
//   .find('a#thumbnail')
//   .click();
//   cy.wait(5000); 
//   cy.get('#above-the-fold > :nth-child(1) > h1.style-scope > .style-scope', { timeout: 10000 })
//   .should('be.visible');


// cy.scrollTo('bottom');
// cy.wait(5000); 
// cy.get('ytd-comment-thread-renderer', { timeout: 15000 })
//   .should('have.length.greaterThan', 0);
// cy.get('ytd-comment-thread-renderer').then(($comments) => {
//   const count = $comments.length;
//   cy.log(`Total Comments Found: ${count}`);








// })



// })
// })