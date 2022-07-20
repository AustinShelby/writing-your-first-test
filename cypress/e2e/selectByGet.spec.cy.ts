describe("Landing page", () => {
  it("select by get", () => {
    cy.visit("/");

    // Get by element h1
    cy.get("h1");

    // Get by element h2
    cy.get("h2");

    // Get by class title
    cy.get(".title");

    // Get by id hello-world
    cy.get("#hello-world");

    // Get by attribute name name
    cy.get("[name=name]");

    // Get by attribute data-cy h1-title
    cy.get("[data-cy=h1-title]");
  });
});

export {};
