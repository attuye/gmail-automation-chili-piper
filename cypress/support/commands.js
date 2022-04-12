// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginToGmail", () => {
  cy.log("Logging in to Gmail");
  cy.visit('/')
  cy.contains("Login").click();
  cy.get("#email").type("testchilipiper@gmail.com");
  cy.get("#password").type("test@Chili");
  cy.get("#btnLogin").click();

  //Assertions
  cy.get("#name").should('contain', 'Chili Piper');
  cy.get("#email").should("contain", "testchilipiper@gmail.com");
});
