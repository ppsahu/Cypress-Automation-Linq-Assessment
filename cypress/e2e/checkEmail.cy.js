describe("Launch the Linq welcome page", () => {
    it("Check for Valid Email", () => {
      cy.visit("https://staging-web.linqapp.com/welcome");
      cy.get('.gap-4 > :nth-child(1) > .flex-row > .absolute').click();
      cy.get('#input-5').type('jebnkj');
      cy.get('.button-primary').click();
      cy.get('.text-error').should('have.text', 'please enter a valid email');
    });
  });
  