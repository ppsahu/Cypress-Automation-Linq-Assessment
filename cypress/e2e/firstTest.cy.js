describe("Launch the Linq welcome page", () => {
  it("Launch the application", () => {
    cy.visit("https://staging-web.linqapp.com/welcome");
    cy.get("#input-3").type("2348");
    cy.get(".button-primary").click();
    cy.get(".text-error").should(
      "have.text",
      "please enter a valid phone number"
    );
  });
});
