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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('typeLogin', (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
})

Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
})

Cypress.Commands.add('logging', () => {
  cy.log('TEST LOG1');
  cy.log('TEST LOG2');
})

Cypress.Commands.add('setLocalStorage',(key,value)=>{
  cy.window().then(window =>{
    window.localStorage.setItem(key,value);
  })
})

Cypress.Commands.add('getLocalStorage',(key)=>{
  cy.window().then((window)=>{
    cy.log('key: ' + key);
    return window.localStorage.getItem(key);
  })
})