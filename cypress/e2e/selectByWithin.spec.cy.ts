describe("Landing page", () => {
  it("select by within", () => {
    cy.visit("/");

    // Get Apple that is inside a list
    cy.get("ul").within(() => {
      cy.contains("Apple");
    });
  });
});

export {};
