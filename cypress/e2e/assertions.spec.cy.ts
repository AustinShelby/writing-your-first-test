describe("Landing page", () => {
  it("assertions", () => {
    cy.visit("/");

    // Should have 4 li elements
    cy.get("li").should("have.length", 4);

    // h1 should have word World
    cy.get("h1").should("contain", "World");

    // Button should be enabled
    cy.get("button").should("be.enabled");

    // Input should have value Omega
    cy.get("input").should("have.value", "Omega");
  });
});

export {};
