

describe("CSS locators", () => {
  it("Search for T-shirts", () => {
    cy.visit("http://www.automationpractice.pl/index.php");

    cy.get("#search_query_top").type("T-shirts");
    cy.get("[name='submit_search']").click();
    cy.get(".lighter").contains("T-shirts");
    cy.wait(5000);
  });
});
