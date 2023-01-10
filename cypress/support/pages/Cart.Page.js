class Cart {

    get = {
        goCart: () => cy.get("#shopping_cart_container"),
        continueShopping: () => cy.get("#continue-shopping"),
        checkOut:   () => cy.get("#checkout"),

    }

}

module.exports = new Cart()
