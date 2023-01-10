class hamburgerButton {

    get = {
        hamburgerButton: () => cy.get("#react-burger-menu-btn"),
        allItem: () => cy.get("#inventory_sidebar_link"),
        about:   () => cy.get("#about_sidebar_link"),
        logout: () => cy.get("#logout_sidebar_link"),
        resetState:   () => cy.get("#reset_sidebar_link"),

    }

}

module.exports = new hamburgerButton()