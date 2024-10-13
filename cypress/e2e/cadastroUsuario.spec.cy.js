
import '../support/commands'


describe('template spec', () => {

  beforeEach(() => {

    cy.visit('https://automationexercise.com/')
  })





  it.only('cadastro', () => {
    cy.cadatrarUsuarioUsernameEmail()
    cy.cadatrarUsuarioFormulario()
    cy.fecharPopUp()
  })

  it('login', () => {
    cy.login()
  })

})