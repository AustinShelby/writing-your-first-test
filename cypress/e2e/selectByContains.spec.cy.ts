describe("Landing page", () => {
  it("select Hello World", () => {
    cy.visit("/");

    cy.contains("Hello World");

    cy.get("h1");
  });
});

export {};
