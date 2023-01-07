import LoginPage from '../../../support/pages/Login.Page'

describe("SwagLabs | Login", () => {

    beforeEach(" Precondition: go to page saucedemo ", () => {
        cy.visit(("https://www.saucedemo.com/"))
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it('TC1 : Assert successfully login', () => {
        LoginPage.enterUsername('standard_user')
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLogin()
    })

    it('TC2 : Assert blocked user message', () => {
        LoginPage.enterUsername('locked_out_user')
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLogin()
        LoginPage.get.errorMessage().should("have.text", "Epic sadface: Sorry, this user has been locked out.")
    })

    it('TC3 : Assert incorrect user or password message', () => {
        LoginPage.enterUsername('randomUser')
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLogin()
        LoginPage.get.errorMessage().should("have.text", "Epic sadface: Username and password do not match any user in this service")
    })

    it('TC4 : Assert empty user message', () => {
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLogin()
        LoginPage.get.errorMessage().should("have.text", "Epic sadface: Username is required")
    })

    it('TC5 : Assert empty password message', () => {
        LoginPage.enterUsername('standard_user')
        LoginPage.clickLogin()
        LoginPage.get.errorMessage().should("have.text", "Epic sadface: Password is required")
    })



})