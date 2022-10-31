describe("Landing page", () => {
  it("form input works", () => {
    // Arrange
    cy.visit("/");

    // Act
    cy.get("input").type("Hello World");

    // Assert
    cy.get("input").should("have.value", "Hello World");
  });
});

export {};
