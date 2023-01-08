class SocialMedia {

    get = {
        twitterIcon: () => cy.get("li.social_twitter"),
        facebookIcon: () => cy.get("li.social_facebook"),
        linkedInIcon:   () => cy.get("li.social_linkedin"),

    }


}

module.exports = new SocialMedia()
