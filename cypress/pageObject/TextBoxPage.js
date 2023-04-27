class TextBoxPage{
    static get usernameField(){
        return  cy.get("#userName");
    }
    static get emailField(){
        return  cy.get("#userEmail");
    }
    static get addressField(){
        return  cy.get("textarea#currentAddress");
    }
    static get pAdressField(){
        return  cy.get("textarea#permanentAddress");
    }

    static get buttonField(){
        return  cy.get("button#submit");
    }

    
}

export default TextBoxPage;