describe("User Sign-up and Login", function () {
  beforeEach(function () {
    // cy.task("db:seed");
    // cy.intercept("POST", "/users").as("signup");
  });

  // it("should redirect unauthenticated user to signin page", function () {
  //   cy.visit("/");
  //   cy.visualSnapshot("");
  //   cy.get("#__next > div.font-sans.antialiased.bg-white.text-dark > main > section > h1").should(
  //     "contain",
  //     "Welcome back!"
  //   );
  //   cy.get(
  //     "#__next > div.font-sans.antialiased.bg-white.text-dark > main > section > form > div > a > div > div"
  //   ).should("contain", "Sign in with Google");
  // });

  // it("login success", function () {
  //   cy.visit("/");
  //   cy.get(
  //     "#__next > div.font-sans.antialiased.bg-white.text-dark > main > section > form > div > a > div > div"
  //   ).click();
  //   cy.get("#identifierId").type("06.subrata@gmail.com");
  //   cy.get("#identifierNext > div > button > div.VfPpkd-RLmnJb").click();
  // });

  describe("Login", function () {
    beforeEach(function () {
      cy.loginByGoogleApi();
    });

    it("should redirect to the event page after login", function () {
      cy.contains("Manage virtual volunteering").should("be.visible");
      cy.location("pathname").should("equal", "/event");
    });
  });
});
