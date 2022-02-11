describe("Slots", function () {
  beforeEach(function () {
    cy.intercept("POST", "/api/events").as("createEvents");
    cy.loginByGoogleApi();
  });

  describe("slots Creation", function () {
    it("creates a new slot", function () {
      cy.fixture("new-slot").then((slot) => {
        cy.addSlot(slot);

        cy.contains("Create slot").click({ force: true });

        cy.wait("@createEvents").its("response.statusCode").should("eq", 200);
        cy.contains("A slot has been created for the selected event.").should("be.visible");
      });
    });
  });
});
