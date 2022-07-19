describe("Landing page", () => {
  it("should show heading", () => {
    cy.visit("/");
    cy.get("h1").contains("Hello World");
  });
});

export {};
