//const { baseUrl } = require("../config/baseUrl");
const testData = require("../config/testData.json");

describe("Login Tests", () => {
  beforeEach(() => {
   cy.visit("/")
  });

  it("Displays error message for invalid credentials", () => {
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.get('#email', { timeout: 10000 }).should('be.visible');
    cy.get("#email").type("invalid@example.com");
    cy.get("#password").type("invalidpassword");
    cy.xpath("//button[@type='submit']").click();
    cy.contains("These credentials do not match our records.").should("be.visible");
  });

  });


