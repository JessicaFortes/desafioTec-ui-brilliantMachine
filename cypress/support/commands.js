import { loginPage } from "./page/loginPage"

Cypress.Commands.add('login', () => {
   cy.visit("/");
   cy.get(loginPage.userName).type(Cypress.env("credential").userName);
   cy.get(loginPage.password).type(Cypress.env("credential").password, { log: false });
   cy.get(loginPage.btnLogin).click();
})