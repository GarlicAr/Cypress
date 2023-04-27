import TextBoxPage from "../../pageObject/TextBoxPage";

describe("Elements", () => {
  context("Text Box scenarios", () => {
    beforeEach(() => {
      cy.visit("/text-box");
    });

    it("Text Box Positive", () => {
      // TODO: Implement scenario
      TextBoxPage.usernameField.type("Donald Trump");
      TextBoxPage.emailField.type("random@email.com");
      TextBoxPage.addressField.type("Random Current Address");
      TextBoxPage.pAdressField.type("Random Permanent Address");
      TextBoxPage.buttonField.click();
      //Validation
      cy.get("#name").should("have.text", "Name:Donald Trump");
      cy.get("#email").should("have.text", "Email:random@email.com");
      cy.get("p#currentAddress").should(
        "contain.text",
        "Current Address :Random Current Address"
      );
      cy.get("p#permanentAddress").should(
        "contain.text",
        "Permananet Address :Random Permanent Address"
      );
    });
  });
});

/*
Workaround
*/
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});


