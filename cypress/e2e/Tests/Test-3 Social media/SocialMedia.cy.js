import LoginPage from '../../../support/pages/Login.Page'
import SocialMediaPage from '../../../support/pages/SocialMedia.Page'

describe("SwagLabs | SocialMedia ", () => {

    beforeEach(" Precondition: ", () => {
        cy.visit(("https://www.saucedemo.com/"))
        cy.clearCookies()
        cy.clearLocalStorage()
        LoginPage.enterUsername('standard_user')
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLogin()
    })

    it('TC1 : Assert user go successfully to twitter page when select twitter icon', () => {
        cy.url().should('contain', '/inventory.html');
        SocialMediaPage.get.twitterIcon().click()
    })

    it('TC2 : Assert user go successfully to facebook page when select facebook icon', () => {
        cy.url().should('contain', '/inventory.html');
        SocialMediaPage.get.facebookIcon().click()
    })

    it('TC3 : Assert user go successfully to linkedIn page when select linkedIn icon', () => {
        cy.url().should('contain', '/inventory.html');
        SocialMediaPage.get.linkedInIcon().click()
    })


})