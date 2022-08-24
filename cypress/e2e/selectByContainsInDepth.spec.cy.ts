describe("Landing page", () => {
  it("contains Hello World", () => {
    cy.visit("/");

    cy.contains("Hello World");
  });
});

export {};
