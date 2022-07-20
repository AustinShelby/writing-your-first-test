describe("Landing page", () => {
  it("h1 is Hello World", () => {
    cy.visit("/");
    cy.contains("Hello World");
  });

  it("h1 is Hello World", () => {
    cy.visit("/");
    cy.get("h1").contains("Hello World");
  });

  it("h2 is Fruits", () => {
    cy.visit("/");
    cy.get("h2").contains("Fruits");
  });

  it("first element inside main has text Hello World", () => {
    cy.visit("/");
    cy.get("main:first").contains("Hello World");
  });

  it("title class element is Hello World", () => {
    cy.visit("/");
    cy.get(".title").contains("Hello World");
  });

  it("h1 with title class element is Hello World", () => {
    cy.visit("/");
    cy.get("h1.title").contains("Hello World");
  });

  it("element with id hello-world has text Hello World", () => {
    cy.visit("/");
    cy.get("#hello-world").contains("Hello World");
  });

  it("element with id that starts hello- has text Hello World", () => {
    cy.visit("/");
    cy.get("[id^=hello-]").contains("Hello World");
  });

  it("element with data-useless attribute omega has text Hello World", () => {
    cy.visit("/");
    cy.get("[data-useless=omega]").contains("Hello World");
  });

  it("first child of ul element has text Apple", () => {
    cy.visit("/");
    cy.get("ul").children().first().contains("Apple");
  });

  it("sibling that has class red of li that has class blue has text Mango", () => {
    cy.visit("/");
    cy.get("li.blue").siblings(".red").contains("Mango");
  });

  it("next sibling of li that has class red has text Watermelon", () => {
    cy.visit("/");
    cy.get("li.red").next().contains("Watermelon");
  });

  it("the second li of ul has text banana", () => {
    cy.visit("/");
    cy.get("ul>li").eq(1).contains("Banana");
  });

  it("the input of the label Name has text Omega", () => {
    cy.visit("/");
    cy.contains("Name").contains("Omega");
  });
});

export {};
