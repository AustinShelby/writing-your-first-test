describe("Landing page", () => {
  it("select by get", () => {
    cy.visit("/");

    // Get the first li element inside ul
    cy.get("ul li:first");

    // Get buttons that have a type submit
    cy.get("button:submit");

    // Get h2 element that doesn't have a class sub-title
    cy.get("h2[class!=sub-title]");
  });
});

export {};
