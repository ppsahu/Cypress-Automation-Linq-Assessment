describe("Launch the Linq welcome page", () => {
  it("Check Implicit Assertions", () => {
    
    // There is a difference between the actual homepage for linq app and staging-web linq app
    // Here I have tried to assert the difference between the 2 web pages

    // Checks on URL of the webpage
    cy.visit("https://staging-web.linqapp.com/welcome");
    cy.url()
      .should("include", "linqapp") // should include linqapp - tells that it is a page developed by Linq
      .should("eq", "https://staging-web.linqapp.com/welcome") // assert that this is a test page
      .should("contain", "staging-web")
      .should("not.contain", "https://linqapp.com/"); // the url should not match with the actual Linq's home page

    // Checks on Title of the webpage
    cy.title()
      .should("contain", "Linq")
      .should("eq", "Linq App") // The title should contain the Linq app - asserts that the page is from Linq'a team
      .should("not.contain", "Linq: meet, manage and close more leads"); // the original page's tilte is different that the test page - this asserts that the title does not match with the title page

    // Checks for Linq Logo
    cy.get(".w-fit.z-10").should("be.visible").and("exist"); // Linq logo should be visible, upon clicking will take us to the original Linq's page

    cy.get("div[class='text-[18px] mb-4 whitespace-pre-line']").should(
      "contain",
      "Log In or Sign Up"
    ); // Asserts that this is a Log in page where users need to provide their credentials to access their Linq profiles or register for new users

    cy.get(
      "div[class='text-caption-small text-gray-500 dark:text-gray-600 px-2']"
    ).should("contain", "number"); // the text below the phone number field should assert that the user needs to enter their phone number, upon providing they will get the verification code on their number

    // checks whether apple, google and linkedin login options are avaiable for users
    cy.get(":nth-child(2) > .flex-row > .absolute").should("contain", "Apple");
    cy.get(":nth-child(3) > .flex-row > .absolute").should("contain", "Google");
    cy.get(":nth-child(4) > .flex-row > .absolute").should(
      "contain",
      "LinkedIn"
    );

    // Tests whether a valid phone number is entered or not. A valid phone number should contain 10 dgits.
    let expectedValue = "34243";
    cy.get("#input-3").type(expectedValue); // provide phone number value in the input box
    cy.get("#input-3").should("have.value", expectedValue); // check whether same value is typed or not
    cy.get(".button-primary").click(); // Click on Contnue
    cy.get(".text-error").should(
      "contain",
      "please enter a valid phone number"
    ); // The continue button should not work as the phone numbe is invalid, the error message should tell the user that the number provided is an invalid number.
  });
});
