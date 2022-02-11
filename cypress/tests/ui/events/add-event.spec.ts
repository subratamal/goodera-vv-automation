describe("Events", function () {
  beforeEach(function () {
    cy.intercept("POST", "/api/opportunities").as("createOpportunities");
    cy.loginByGoogleApi();
  });

  describe("Events Creation", function () {
    it("creates a new event", function () {
      cy.fixture("new-event").then((event) => {
        cy.addEvent(event);
        cy.get("#__next > div > div > form > div > button[type='submit']").click();

        cy.wait("@createOpportunities").its("response.statusCode").should("eq", 200);
        cy.contains("Event successfully created!").should("be.visible");
      });
    });

    it("fails on re-adding the same event", function () {
      cy.fixture("new-event").then((event) => {
        cy.addEvent(event);
        cy.get("#__next > div > div > form > div > button[type='submit']").click();

        cy.wait("@createOpportunities").its("response.statusCode").should("eq", 422);
        cy.contains(
          "An event with this name and non profit already exists in this organization"
        ).should("be.visible");
      });
    });
  });
});
