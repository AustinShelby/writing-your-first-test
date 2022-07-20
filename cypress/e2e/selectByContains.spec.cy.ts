describe("Landing page", () => {
  it("select by contains", () => {
    cy.visit("/");

    // Get by Hello World
    cy.contains("Hello World");

    // Get by Fruits
    cy.contains("Fruits");

    // Get by Apple
    cy.contains("Apple");
  });
});

export {};
