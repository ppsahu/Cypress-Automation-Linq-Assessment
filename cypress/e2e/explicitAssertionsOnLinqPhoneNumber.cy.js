describe("Launch the Linq welcome page", () => {
    it("Check Explicit Assertions on Phone Number", () => {

        // This is a BDD (Behavioural Driven Development) Testing

      // Visit the welcome test page of Linq App
      cy.visit("https://staging-web.linqapp.com/welcome"); 

      // Type the phone number on phone number box
      cy.get('#input-3').type('7824395083');

      // Click on Continue
      cy.get('.button-primary').click();

      // Url changes -> The new URL should contain the phone number entered on the previous page
      cy.url().should('contain', '7824395083');

    });
  });
  