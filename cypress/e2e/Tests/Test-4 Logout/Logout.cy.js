import HamburgerMenuPage from '../../../support/pages/HamburgerMenu.Page'
import LoginPage from '../../../support/pages/Login.Page'


describe("SwagLabs | SocialMedia ", () => {

    beforeEach(" Precondition: ", () => {
        cy.visit(("https://www.saucedemo.com/"))
        cy.clearCookies()
        cy.clearLocalStorage()
        LoginPage.enterUsername('standard_user')
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLogin()
    })

    it('TC1 : Assert user successfully logout', () => {
        cy.url().should('contain', '/inventory.html');
        HamburgerMenuPage.get.hamburgerButton().click({force: true})
        HamburgerMenuPage.get.logout().click()
    
    })


})