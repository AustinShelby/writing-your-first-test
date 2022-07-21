describe("Landing page", () => {
  it("multiple assertions", () => {
    cy.visit("/");

    // Third li element inside ul should have text Mango and class red
    cy.get("ul>li")
      .eq(2)
      .should("have.text", "Mango")
      .should("have.class", "red");

    // First input inside form should not be disabled and have name attribute of name
    // and type attribute of text
    cy.get("form input:first")
      .should("not.be.disabled")
      .and("have.attr", "name", "name")
      .and("have.attr", "type", "text");
  });
});

export {};
