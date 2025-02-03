const { BASE_URL } = require("../config/baseUrl");
const testData = require("../config/testData.json");

describe("Task 2 Tests", () => {
  beforeEach(() => {
    cy.visit(`${BASE_URL}`);
  });

  it("Allows a guest to book a tour", () => {
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)").click();
        cy.xpath("//input[@placeholder='Please enter the number of slots you are booking.']").type("2");
        cy.xpath("//input[@placeholder='Please enter the ticket holder name.']").type("John Doe");
        cy.xpath("//input[@placeholder='Please enter your email address.']").type("wamaithahh@gmail.com");
        cy.xpath("//span[normalize-space()='Book Tour']").click();

    });
    it("Allows admin to add a new tour", () => {
        cy.xpath("//a[normalize-space()='Log in']").click();
        cy.get('#email', { timeout: 10000 }).should('be.visible');
        cy.get("#email").type("admin@account.com");
        cy.get("#password").type("password");
        cy.xpath("//button[@type='submit']").click();
        cy.xpath("//a[normalize-space()='Tours']").click();
        cy.xpath("//button[@class='ivu-btn ivu-btn-primary ivu-btn-large']").click();
        cy.get("input[placeholder='Enter tour name']").type("task 1");
        cy.get("input[placeholder='Enter Tour description']").type("task 1");
        cy.xpath("//span[@class='ivu-select-placeholder']").click();
        cy.xpath("//li[@class='ivu-select-item']").click();
        cy.get("input[placeholder='Enter the price per slot']").type("2");
        cy.get("input[placeholder='Enter the number of slots available']").type("2");
        cy.xpath("//span[normalize-space()='Submit']").click();
      });
     it("Displays a list of all bookings", () => {
         cy.xpath("//a[normalize-space()='Log in']").click();
         cy.get('#email', { timeout: 10000 }).should('be.visible');
         cy.get("#email").type("admin@account.com");
         cy.get("#password").type("password");
         cy.xpath("//button[@type='submit']").click();
         cy.xpath("//a[normalize-space()='Bookings']").click();
         cy.contains("Bookings").should("be.visible");
         cy.get("table tbody tr").should("have.length.greaterThan", 0);

      });
     it("Displays all generated tickets", () => {
        cy.xpath("//a[normalize-space()='Log in']").click();
        cy.get('#email', { timeout: 10000 }).should('be.visible');
        cy.get("#email").type("admin@account.com");
        cy.get("#password").type("password");
        cy.xpath("//button[@type='submit']").click();
        cy.xpath("//a[normalize-space()='Tickets']").click();
        cy.contains("Tickets").should("be.visible");
        cy.get("table tbody tr").should("have.length.greaterThan", 0);

            });
  });
