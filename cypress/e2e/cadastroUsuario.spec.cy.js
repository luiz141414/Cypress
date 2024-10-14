
import '../support/commands'


describe('template spec', () => {

  beforeEach(() => {

    cy.visit('https://automationexercise.com/')
  })





  it('cadastro', () => {
    cy.cadatrarUsuarioUsernameEmail()
    cy.cadatrarUsuarioFormulario()
    cy.fecharPopUp()
  })

  it.only('login', () => {
    cy.login()
  })

})