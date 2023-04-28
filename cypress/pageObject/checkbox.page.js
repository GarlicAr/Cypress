import BasePage from "./base.page";

class CheckboxPage extends BasePage{
    static get url(){
        return "/checkbox";
    }

    static get expandButton(){
        return cy.get(".rct-option-expand-all");
    }

    static get checkBoxTitles(){
        return cy.get(".rct-title");
    }

    static get result(){
        return cy.get("#result");
    }

    

}

export default CheckboxPage