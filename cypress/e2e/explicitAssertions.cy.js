describe("Launch the Linq welcome page", () => {
    it("Check Explicit Assertions", () => {
      // Checks on URL of the webpage
      cy.visit("https://staging-web.linqapp.com/welcome");

      cy.get('#input-3').type('7824395083');

      cy.get('.button-primary').click();

      cy.url().should('contain', '7824395083');

    });
  });
  