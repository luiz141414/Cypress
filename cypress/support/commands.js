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


import locators from "./locator"

var faker = require('faker-br');


Cypress.Commands.add('cadatrarUsuarioUsernameEmail', () => {
    cy.log('== cadastrando usuario ==')

    let numerAleatorio = faker.random.number({ 'min': 1111111, 'max': 999999 });
    let meuCpf = faker.br.cpf();
    cy.get(locators.paginaHome.btnSignupLogin)
        .should('be.visible')
        .click()

    cy.get('[data-qa="signup-name"]').type('luizteste12345678')
    cy.get('[data-qa="signup-email"]').type(`luizfernandoqa+${numerAleatorio}@gmail.com`)
    cy.get('[data-qa="signup-button"]').click()

})

Cypress.Commands.add('cadatrarUsuarioFormulario', () => {



    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type('teste4321')
    cy.get('[data-qa="first_name"]').type('luizteste321')
    cy.get('[data-qa="last_name"]').type('fernandoteste4321')
    cy.get('[data-qa="company"]').type('companyABC123')
    cy.get('[data-qa="address"]').type('rua teste 123')
    cy.get('[data-qa="country"]')
        .select('United States')
    cy.get('[data-qa="state"]').type('New York')
    cy.get('[data-qa="city"]').type('New York City')
    cy.get('[data-qa="zipcode"]').type('10001')
    cy.get('[data-qa="mobile_number"]').type('1234567890')
    cy.get('[data-qa="create-account"]').click()
})

Cypress.Commands.add('fecharPopUp', () => {


    cy.get('[data-qa="continue-button"]').click()
})


Cypress.Commands.add('login', () => {
    cy.get(locators.paginaHome.btnSignupLogin)
        .should('be.visible')
        .click()


    cy.get('[data-qa="login-email"]').type('luizfernandoqa@gmail.com')
    cy.get('[data-qa="login-password"]').type('teste4321')
    cy.get('[data-qa="login-button"]').click()  
})