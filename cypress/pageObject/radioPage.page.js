import BasePage from "./base.page";

class radioPage extends BasePage{
    static get url(){
        return "/radio-button";
    }

    static get allRadioButtons(){
        return cy.get(".custom-control-label");
    }

    static get result(){
        return cy.get(".mt-3");
    }
}

export default radioPage