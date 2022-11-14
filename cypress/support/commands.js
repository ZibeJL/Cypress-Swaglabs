// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload'
let GlobalID

Cypress.Commands.add("LogIn",()=> {
	cy.fixture("DOM/OpenMRS/Open").then((the) => {
		cy.get(the.username.input)
			.type(the.username.data.valid)
		cy.get(the.password.input)
			.type(the.password.data.valid)
			cy.get("#sessionLocation").should('have.class', 'select').within(() => {
				cy.get('[id="Inpatient Ward"]').click({force: true })
			})
	cy.get(the.LoginButton.In)
		.click()		
	})
})
Cypress.Commands.add("RegisterPatient", ()=> {
	cy.get("#referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension").click()
        cy.get("#demographics-name").within(() => {
            cy.get('[name="givenName"]').type("Carl")
            cy.get('[name="middleName"]').type("Otto")
            cy.get('[name="familyName"]').type("Jhonson")
        })
        cy.get("#next-button").click({force: true })
        cy.get("#gender-field").select("Male")
        cy.get("#next-button").click({force: true })
        cy.get("#birthdateDay-field").type("12")
        cy.get("#birthdateMonth-field").select("June")  
        cy.get("#birthdateYear-field").type("1982")
        cy.get("#next-button").click({force: true })
        cy.get("#address1").type("Callao 1234")
        cy.get("#cityVillage").type("Resistencia")
        cy.get("#stateProvince").type("Chaco")
        cy.get("#country").type("Argentina")
        cy.get("#postalCode").type("3500")
        cy.get("#next-button").click({force: true })
        cy.get(".phone").type("+543624426396")
        cy.get("#next-button").click({force: true })
        cy.get("#relationship_type").select("Doctor")
        cy.get('[placeholder="Person Name"]').type("Marcos")
        cy.get("#next-button").click({force: true })
        cy.get('#submit').click({force: true })
})
Cypress.Commands.add("ScheduleA", ()=> {
	cy.get('.odd > :nth-child(2)').click()
    cy.get("#viewAllAppointmentTypes").click()
    cy.get('.dialog-content > :nth-child(2) > .ng-binding').click()
    cy.get(':nth-child(4) > .ng-pristine').click()
    cy.get('#searchButtons > .confirm').click()
})
Cypress.Commands.add("Attachment", ()=> {
    cy.wait(1000)
    cy.get('.odd > :nth-child(2)').click()
    cy.get('.col-1 > .icon-check-in').click()
    cy.get('#start-visit-with-visittype-confirm').click()
    cy.wait(2000)
    cy.get('.icon-paper-clip').click()
    cy.wait(1000)
    cy.get('.att_caption-element > .ng-pristine').type("order")
    cy.wait(1000)
    const path= 'images/img1.png'
    cy.wait(1000)
    cy.get('.dz-default').attachFile(path)
    cy.wait(1000)
    cy.get('.right > .confirm').click()
})
Cypress.Commands.add("Delete", ()=> {
    cy.wait(1000)
    cy.get('.odd > :nth-child(2)').click()
    cy.get('.col-1 > .icon-remove').click()
    cy.get('#delete-reason').type("Test finished")
    cy.get('#delete-reason').should("be.visible")
    cy.get("#delete-patient-creation-dialog > .dialog-content > .confirm").should("have.text", "Confirm")
    cy.get('#delete-patient-creation-dialog > .dialog-content > .confirm').click()
})
Cypress.Commands.add("AssertsTC5", ()=> {
    cy.get(".float-sm-right").should("be.visible").contains("Patient ID")
        cy.get("#edit-patient-demographics").should("be.visible").contains("Edit")
        cy.get(".icon-home").should("be.visible")
        cy.get(".PersonName-givenName").should("be.visible").contains("Carl")
        cy.get("#coreapps-showContactInfo").should("be.visible").contains("Show Contact Info")
})
Cypress.Commands.add("AssertsTC6", ()=> {
    cy.get('[typeahead="appointmentType as appointmentType.display for appointmentType in getAppointmentTypes($viewValue) | limitTo:8"]').should("be.visible")
        cy.get('[ng-click="startDateOptions.clear($event)"]').should("be.visible")
        cy.get("#selectAppointmentType > p").should("be.visible").contains("Select Service Type")
})
Cypress.Commands.add("AssertsTC7", ()=> {
    cy.get(".right > .confirm").should("be.visible").should("have.text", "Upload file")
        cy.get('[ng-click="clearForms()"]').should("be.visible").should("have.text", "Clear forms")
})
Cypress.Commands.add("AssertsTC2", ()=> {
    cy.get('[href="/openmrs/appui/header/logout.action?successUrl=openmrs"]').should("be.visible")
    cy.contains("Logged in as Super User (admin) at Inpatient Ward.")
})
Cypress.Commands.add("AssertsTC3", ()=> {
    cy.get("#referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension").should("be.visible")
    cy.contains("Logged in as Super User (admin) at Inpatient Ward.")
})
Cypress.Commands.add("AssertsTC4", ()=> {
    cy.get("#patient-search").should("be.visible")
    cy.get("#patient-search-clear-button").should("be.visible")
})





