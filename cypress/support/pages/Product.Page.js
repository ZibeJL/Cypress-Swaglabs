class ProductPage {

    get = {
        shoppingCartIcon: () => cy.get("a.shopping_cart_link"),
        SelectAllProducts: ("selectProduct", (productName) => {
            cy.get("div.inventory_item_name").each(($el, index, $list) => {
                if ($el.text().includes(productName))
                {
                    cy.get("button.btn.btn_primary.btn_small.btn_inventory").eq(0).click()
                    cy.get("a.shopping_cart_link").should('have.length.greaterThan', 0)
                    }
            })   
        })
        
        
    }

}

module.exports = new ProductPage()
