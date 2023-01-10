import ProductPage from "../../../support/pages/Product.Page";
import LoginPage from '../../../support/pages/Login.Page'

describe("SwagLabs | Delete product", () => {

    beforeEach(" Precondition: Be logged and add product to the sopping cart ", () => {
        cy.visit(("https://www.saucedemo.com/"))
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.login()
        cy.selectProducts()
    })

    it('TC1 : Delete products from to the shopping cart', () => {
        cy.deleteProducts()
    })

})