class LoginPage {

    get = {
        usernameInput: () => cy.get("#user-name"),
        passwordInput: () => cy.get("#password"),
        loginButton:   () => cy.get("#login-button"),
        errorMessage:  () => cy.get("div.error-message-container.error"),
    }

    enterUsername(username){
        this.get.usernameInput().type(username)
    }

    enterPassword(password){
        this.get.passwordInput().type(password)
    }

    clickLogin(){
        this.get.loginButton().click()
    }



}

module.exports = new LoginPage()
