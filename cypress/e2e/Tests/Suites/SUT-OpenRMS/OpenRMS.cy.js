let GlobalID // Save the variable of the new patient
import 'cypress-file-upload' 
describe("OpenMRS | Login ", () => {
    beforeEach("", () => {
        cy.visit("https://demo.openmrs.org/openmrs/" ,{failOnStatusCode: false})
        cy.clearCookies()
        cy.clearLocalStorage()      
    })
    it("OpenRMS| TC1: Login.", () => {
        cy.url().should("contain","login.htm")
        cy.LogIn("Admin", "Admin123")
        cy.contains("Logged in as Super User (admin) at Inpatient Ward.")
    })
    it("OpenRMS| TC2: Logout.", () => {
        cy.LogIn("Admin", "Admin123")
        cy.AssertsTC2()
        cy.fixture("DOM/OpenMRS/Open").then((the) => {
            cy.get(the.LoginButton.LogOut).click()
        })
    })
    it("OpenRMS| TC3: Register a patient.", () => {
        cy.LogIn("Admin", "Admin123")
        cy.AssertsTC3()
        cy.RegisterPatient()
        cy.wait(2000)
        cy.get(".float-sm-right").invoke('text').then((text) => {
            GlobalID = text.split('ID')[1].trim()
            cy.log('GlobalID', GlobalID )
            cy.log('Current Patient ID', text) 
        });    
    })
    it("OpenRMS| TC4: Find patient Record.", () => {
        cy.fixture("DOM/OpenMRS/Open").then((the) => {
            cy.LogIn("Admin", "Admin123")
            cy.contains("Logged in as Super User (admin) at Inpatient Ward.").should("be.visible")
            cy.get(the.find.visit).click()
            cy.AssertsTC4()
            cy.get(the.find.search).type(GlobalID)
            cy.get(the.find.select).click()
        })
    })     
    it("OpenRMS| TC5: View the patient.", () => {
        cy.fixture("DOM/OpenMRS/Open").then((the) => {
            cy.LogIn("Admin", "Admin123")
            cy.get(the.find.visit).click()
            cy.get(the.find.search).type(GlobalID)
            cy.get(the.find.select).click()
            cy.get(the.find.patientID).should("be.visible")
            cy.AssertsTC5()
        })
    })
    it("OpenRMS| TC6: Book an appointment.", () => {
        cy.LogIn("Admin", "Admin123")
        cy.get("#appointmentschedulingui-homeAppLink-appointmentschedulingui-homeAppLink-extension").click()
        cy.get("#appointmentschedulingui-manageAppointments-app").click()
        cy.get("#patient-search").type(GlobalID)
        cy.ScheduleA()
        cy.AssertsTC6()
    })
    it("OpenRMS| TC7: Add an attachment for any Patient.", () => {
        cy.fixture("DOM/OpenMRS/Open").then((the) => {
            cy.LogIn("Admin", "Admin123")
            cy.get(the.find.visit).click()
            cy.get(the.find.search).type(GlobalID)
            cy.Attachment()
            cy.AssertsTC7() 
        })          
    }) 
    it("OpenRMS| TC8: Delete registered Patient.", () => {
        cy.fixture("DOM/OpenMRS/Open").then((the) => {
            cy.LogIn("Admin", "Admin123")
            cy.get(the.find.visit).click()
            cy.get(the.find.search).type(GlobalID)
            cy.Delete()  //Asserts in Delete()
        })  
    })    
})

