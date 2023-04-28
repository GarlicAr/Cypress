class startPage{

    static get greenButton(){
        return cy.get('.cc-btn');
    }

    static get greyButton(){
        return cy.get('.cc-dismis');
    }


}


export default startPage