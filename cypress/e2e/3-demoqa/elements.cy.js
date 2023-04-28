
import TextBoxPage from "../../pageObject/TextBoxPage.page";
import CheckboxPage from "../../pageObject/checkbox.page";
import radioPage from "../../pageObject/radioPage.page";
import webTables from "../../pageObject/webTables.page";

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

  


  // Checkbox scenarios
context("Check Box scenarios", () => {
  beforeEach(() => {
    CheckboxPage.visit();
  });

  it('Checkbox select items', () => { 
    CheckboxPage.expandButton.click();

    CheckboxPage.checkBoxTitles.contains("Notes").click();
    CheckboxPage.checkBoxTitles.contains("Angular").click();
    CheckboxPage.checkBoxTitles.contains("Private").click();
    CheckboxPage.checkBoxTitles.contains("Excel File.doc").click();


    CheckboxPage.result.should(
      "have.text",
      "You have selected :notesangularprivateexcelFile"
    );

  
  })
  it("Checkbox click Desktop", () =>{

    CheckboxPage.expandButton.click();
    var Desktop = CheckboxPage.checkBoxTitles.contains("Desktop");
    Desktop.click();

    CheckboxPage.result.should(
      "have.text",
      "You have selected :desktopnotescommands"
    );
      

  })
});

// Radio button
context("Radio Button scenarios", () => {
  beforeEach(() => {
    // TODO: Create RadioButtonsPage
    radioPage.visit();
  });

  it("Click buttons and validate", () => {
    // Click Yes button
    var yesButton = radioPage.allRadioButtons.contains("Yes");
    yesButton.click();
    // Validate message - You have selected Yes


    radioPage.result.should(
      "have.text",
      "You have selected Yes"
    );
    // Click Impressive button
    var impressiveButton = radioPage.allRadioButtons.contains("Impressive");
    impressiveButton.click();
    // Validate message - You have selected Impressive
    radioPage.result.should(
      "have.text",
      "You have selected Impressive"
    );
    // Validate that no button is disabled
    var noButton = radioPage.allRadioButtons.contains("No");

    noButton.should(`have.class`, `disabled`);
    

    context("Web Table scenarios", () => {
      beforeEach(() => {
        webTables.visit();
      });
  
      it("Web Table Positive", () => {
      
      });
      });
      
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










