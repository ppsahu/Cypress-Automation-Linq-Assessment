describe("Launch the Linq welcome page", () => {
  it("Check for Valid Email", () => {
    cy.visit("https://staging-web.linqapp.com/welcome"); // visiting welcome test page
    cy.get(".gap-4 > :nth-child(1) > .flex-row > .absolute").click(); // click on Email button
    cy.get("#input-5").type("jebnkj"); // types the input as mentioned
    cy.get(".button-primary").click(); // click on Continue
    cy.get(".text-error").should("have.text", "please enter a valid email"); // gives an error for an invalid email
  });
});
