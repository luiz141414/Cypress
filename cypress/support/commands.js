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
import dadosCadastro from "../fixtures/massaDados.json"

var faker = require('faker-br');


Cypress.Commands.add('cadatrarUsuarioUsernameEmail', () => {
    cy.log('== cadastrando usuario ==')

    let numerAleatorio = faker.random.number({ 'min': 1111111, 'max': 999999 });
    let meuCpf = faker.br.cpf();
    cy.get(locators.paginaHome.btnSignupLogin)
        .should('be.visible')
        .click()

    cy.get(locators.paginaHome.fieldName).type(dadosCadastro.paginaHome.nome)
    cy.get(locators.paginaHome.fieldEmail).type(`luizfernandoqa+${numerAleatorio}@gmail.com`)
    cy.get(locators.paginaHome.btnsignup).click()

})

Cypress.Commands.add('cadatrarUsuarioFormulario', () => {



    cy.get(locators.paginaForm.mrCheckbox).click()
    cy.get(locators.paginaForm.fildPassword).type('teste4321')
    cy.get(locators.paginaForm.fieldfirstName).type('luizteste321')
    cy.get(locators.paginaForm.fieldLastName).type('fernandoteste4321')
    cy.get(locators.paginaForm.fildCompany).type('companyABC123')
    cy.get(locators.paginaForm.fieldAddress).type('rua teste 123')
    cy.get(locators.paginaForm.fildCountry)
        .select('United States')
    cy.get(locators.paginaForm.fieldState).type('New York')
    cy.get(locators.paginaForm.fieldCity).type('New York City')
    cy.get(locators.paginaForm.fildZipCode).type('10001')
    cy.get(locators.paginaForm.fieldMobileNumber).type('1234567890')
    cy.get(locators.paginaForm.btnCreateAccount).click()
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