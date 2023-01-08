import ProductPage from "../../../support/pages/Product.Page";
import LoginPage from '../../../support/pages/Login.Page'

describe("SwagLabs | Login", () => {

    beforeEach(" Precondition: go to page saucedemo ", () => {
        cy.visit(("https://www.saucedemo.com/"))
        cy.clearCookies()
        cy.clearLocalStorage()
        LoginPage.enterUsername('standard_user')
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLogin()
    })

    it('TC1 : Add all the products to the shopping cart', () => {
        cy.fixture("DOM/Products/products.Page").then((the) => {
            the.productName.forEach(function (element) {
                ProductPage.get.SelectAllProducts(element)
            })
        })
        cy.url().should('contain', 'inventory.html');
        ProductPage.get.shoppingCartIcon().should('have.length.greaterThan', 0)
    })


})