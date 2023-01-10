// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import ProductPage from "./pages/Product.Page"
import LoginPage from "./pages/Login.Page"

Cypress.Commands.add("login", () => {
    LoginPage.enterUsername('standard_user')
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLogin()
})

Cypress.Commands.add("selectProducts", (productName) => {
    cy.fixture("DOM/Products/products.Page").then((the) => {
        the.productName.forEach(function (element) {
            ProductPage.get.SelectAllProducts(element)
        })
    })
})

Cypress.Commands.add("deleteProducts", (productName) => {
    cy.fixture("DOM/Products/products.Page").then((the) => {
        ProductPage.get.shoppingCartIcon().click()
            the.productName.forEach(function (element) {
                ProductPage.get.deleteAllProducts(element)
            })  
    })
})