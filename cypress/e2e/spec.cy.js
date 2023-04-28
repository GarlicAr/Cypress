
describe("Juice-Shop with login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".cc-btn").click();
    cy.get('[aria-label="Close Welcome Banner"]').click();

    //login
    cy.get('#navbarAccount').click();
    cy.get('#navbarLoginButton').click();
    cy.get('#email').type('demo');
    cy.get('#password').type('demo');
    cy.get('#loginButton').click();
  });

  it("passes", () => {
    //Lemon Juice search
    cy.get('.mat-search_icon-search').click();
    cy.get('#mat-input-0').type("Lemon Juice {enter}");

    cy.get('.item-name').should('have.text', ' Lemon Juice (500ml) ');

  });

  it("passes", () => {
    //500ml Search
    cy.get('.mat-search_icon-search').click();
    cy.get('#mat-input-0').type("500ml {enter}");
    //validation
    //cy.get('.item-name').should('have.text', ' Eggfruit Juice (500ml)  Lemon Juice (500ml)  Strawberry Juice (500ml) ');
    cy.get('.item-name').should('contain.text', ' Eggfruit Juice (500ml)');
    cy.get('.item-name').should('contain.text', ' Lemon Juice (500ml)');
    cy.get('.item-name').should('contain.text', ' Strawberry Juice (500ml)');

  });

  it("Items Per Page", () => {
    //select 12 Items per page
    cy.get('.mat-select-value').click();
    cy.get('.mat-option-text').contains('12').click();
    //validate that we see 12 boxes
    cy.get('.product').should('have.length', 12);
    //Select 24 items per page
    cy.get('.mat-select-value').click();
    cy.get('.mat-option-text').contains('24').click();
    //validate that we see 24 items per page
    cy.get('.product').should('have.length', 24);
    //select 36 items per page
    cy.get('.mat-select-value').click();
    cy.get('.mat-option-text').contains('36').click();
    //validate 36 items
    cy.get('.product').should('have.length', 35);
  });
});


describe("Juice-Shop without login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".cc-btn").click();
    cy.get('[aria-label="Close Welcome Banner"]').click();
  });
    it.only("Register a new user", () => {
      // Click account
      cy.get('#navbarAccount').click();
      // Click login
      cy.get('#navbarLoginButton').click();
      // Click Not yet a customer?
      cy.get('#newCustomerLink').click();
      // Input email
      cy.get('#emailControl').type('demo@demo2.com');
      // Input password
      cy.get('#passwordControl').type('loha');
      // Input repeat password
      // Input Security Question - Your favorite movie?
      // Input Answer to security question
      // Click Register
      // Validate that we on login page - we email and password field should be visible
    });
  
});