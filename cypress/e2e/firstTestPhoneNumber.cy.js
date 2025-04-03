describe("Launch the Linq welcome page", () => {
  it("Launch the application", () => {
    cy.visit("https://staging-web.linqapp.com/welcome");
    cy.get("#input-3").type("2348"); // type phone number on the as input
    cy.get(".button-primary").click();// Click on Continue
    cy.get(".text-error").should(
      "have.text",
      "please enter a valid phone number"
    ); // Since it is less than 10 digits, it should show an error for an invalid phone number
  });
});
