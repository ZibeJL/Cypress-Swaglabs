class ProductPage {

    get = {
            shoppingCartIcon: () => cy.get("a.shopping_cart_link"),
            productNameDiv:   () => cy.get("div.inventory_item_name"),
            addToCartButton:   () => cy.get("button.btn.btn_primary.btn_small.btn_inventory"),
            removeButton:   () => cy.get("button.btn.btn_secondary.btn_small.cart_button"),



            deleteAllProducts: ("removeProduct", (productName) => {
                this.get.productNameDiv().each(($el, index, $list) => {
                if ($el.text().includes(productName))
                {
                    this.get.removeButton().eq(0).click()
                    }
                })
        
            }),

            SelectAllProducts: ("selectProduct", (productName) => {
                this.get.productNameDiv().each(($el, index, $list) => {
                if ($el.text().includes(productName))
                {
                    this.get.addToCartButton().eq(0).click()
                    this.get.shoppingCartIcon().should('have.length.greaterThan', 0)
                    }
                })   
            })
        
            }      

}

module.exports = new ProductPage()
