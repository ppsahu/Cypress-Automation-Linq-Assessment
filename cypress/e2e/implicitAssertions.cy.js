describe("Launch the Linq welcome page", () => {
  it("Check Implicit Assertions", () => {
    // Checks on URL of the webpage
    cy.visit("https://staging-web.linqapp.com/welcome");
    cy.url()
      .should("include", "linqapp")
      .should("eq", "https://staging-web.linqapp.com/welcome")
      .should("contain", "staging-web")
      .should("not.contain", "https://linqapp.com/");

    // Checks on Title of the webpage
    cy.title().should('contain', 'Linq')
        .should('eq', 'Linq App')
        .should('not.contain', 'Linq: meet, manage and close more leads');

    // Checks for Linq Logo
    cy.get('.w-fit.z-10').should('be.visible')
    .and('exist')

    cy.get("div[class='text-[18px] mb-4 whitespace-pre-line']").should('contain', 'Log In or Sign Up');

    cy.get("div[class='text-caption-small text-gray-500 dark:text-gray-600 px-2']").should('contain', 'number');

    cy.get(':nth-child(2) > .flex-row > .absolute').should('contain', 'Apple');
    cy.get(':nth-child(3) > .flex-row > .absolute').should('contain', 'Google');
    cy.get(':nth-child(4) > .flex-row > .absolute').should('contain', 'LinkedIn');

    let expectedValue = '34243'
    cy.get('#input-3').type(expectedValue); // provide phone number value in the input box
    cy.get('#input-3').should('have.value', expectedValue); // check whether same value is typed or not
    cy.get('.button-primary').click();
    cy.get('.text-error').should('contain', 'please enter a valid phone number');


  });
});
