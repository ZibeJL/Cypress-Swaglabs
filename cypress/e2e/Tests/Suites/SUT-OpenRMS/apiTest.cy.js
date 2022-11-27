describe("Ejemplo para demostrar cómo probar una API", () =>
{
    it("TC1: REQUEST from GET Method to GET List User", () =>
    {
        cy.api({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",
        })
            .then((response) =>
            {
                expect(response.status).to.eql(200)
                expect(response).to.be.an("object")
                expect(response).to.have.property('headers')
        })
    })
    it("TC2: REQUEST de Método GET to List <RESOURCE> ", () =>
    {
        cy.api({
            method: "GET",
            url: "https://reqres.in/api/unknown",
        })
            .then((response) =>
            {
                expect(response).to.be.an("object")
                expect(response.status).to.eql(200)
                expect(response).to.have.property('headers')
        })
    })
    it("TC3: REQUEST de Método POST to CREATE ", () =>
    {
        cy.api({
            method: "POST",
            url: "https://reqres.in/api/users ",
            qs: {
                name:"morpheus",
                job: "leader",
            }
        })
            .then((request)=>
            {
                expect(request.headers).to.have.property('content-type')
            })
            .then((response) =>
            {
                expect(response.status).to.eql(201)
                expect(response).to.be.an("object")
        })
    })
    it("TC4: REQUEST de Método PUT to UPDATE  ", () =>
    {
        cy.api({
            method: "PUT",
            url: "https://reqres.in/api/users/2 ",
            qs: {
                name:"morpheus",
                job: "zion resident",
            }
        })
            .then((response) =>
            {
                expect(response.status).to.eql(200)
                expect(response).to.be.an("object")
        })
    })
    it("TC5: REQUEST de Método PATCH to UPDATE  ", () =>
    {
        cy.api({
            method: "PATCH",
            url: "https://reqres.in/api/users/2 ",
            qs: {
                name:"morpheus",
                job: "zion resident",
            }
        })
            .then((response) =>
            {
                expect(response.status).to.eql(200)
                expect(response).to.be.an("object")
        })
    })
    it("TC6: REQUEST de Método DELETE to DELETE  ", () =>
    {
        cy.api({
            method: "DELETE",
            url: "https://reqres.in/api/users/2 ",
            qs: {
                name:"morpheus",
                job: "zion resident",
            }
        })
            .then((response) =>
            {
                expect(response.status).to.eql(204)
                expect(response).to.be.an("object")
        })
    })
    it("TC7: REQUEST de Método POST to REGISTER-SUCCESSFUL ", () =>
    {
        cy.api({
            method: "POST",
            url: "https://reqres.in/api/register",
            body: {
                "email":"eve.holt@reqres.in",
                "password":"pistol"
                }
        })
            .then((response) =>
            {
                expect(response.status).to.eql(200)
                expect(response).to.be.an("object")
                expect(response).property('body').to.contain({"id": 4, "token": "QpwL5tke4Pnpja7X4"})
        })
    })
    it("TC8: REQUEST de Método POST to REGISTER-UNSUCCESSFUL", () =>
    {
        cy.api({
            method: "POST",
            failOnStatusCode: false,
            url: "https://reqres.in/api/register",
            body: {
                "email": "peter@klaven"
                } 
        })
            .then((response) =>
            {
                expect(response.status).to.eql(400)
                expect(response).to.be.an("object")
                expect(response).property('body').to.contain({error: 'Missing password'})
        })
    })
    it("TC9: REQUEST de Método POST to REGISTER-SUCCESSFUL ", () =>
    {
        cy.api({
            method: "POST",
            url: "https://reqres.in/api/login",
            body: {
                "email":"eve.holt@reqres.in",
                "password":"cityslicka"
                }
        })
            .then((response) =>
            {
                expect(response.status).to.eql(200)
                expect(response).to.be.an("object")
                expect(response).property('body').to.contain({token: "QpwL5tke4Pnpja7X4"})
        })
    })
    it("TC10: REQUEST de Método POST to LOGIN UNSUCCESSFUL", () =>
    {
        cy.api({
            method: "POST",
            failOnStatusCode: false,
            url: "https://reqres.in/api/login",
            body: {
                "email":"peter@klaven",
                }
        })        
            .then((response) =>
            {
                expect(response.status).to.eql(400)
                expect(response).to.be.an("object")
                expect(response).property('body').to.contain({error: 'Missing password'})
        })
    })
})