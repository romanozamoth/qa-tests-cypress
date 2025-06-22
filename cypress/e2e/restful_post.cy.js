/// <reference types="cypress"/>

describe('APIs POST - Objects', () => {

    let urlApi = "https://api.restful-api.dev/objects"

    it('Create new objects', () =>{
        cy.request({
            method: "POST",
            url: urlApi,
            body: {
                name:"Computador Teste",
                data: {
                    year: 2025,
                    price: 5500,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "2 TB",
                    color: "red",
                },
            },
        }).then((response) => {
            const idNow = response.body.id
            Cypress.env('createdId', idNow); 
            expect(response.status).to.equal(200);
        })
    })
    
    it('List new object', () =>{
        const idNow = Cypress.env('createdId');
        cy.request({
            method: "GET",
            url: urlApi+"/"+idNow,
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(idNow);
            expect(response.body.name).to.equal("Computador Teste");
        })
    })
    
    it('Delete new object', () =>{
        const idNow = Cypress.env('createdId');
        cy.request({
            method: "DELETE",
            url: urlApi+"/"+idNow,
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal("Object with id = "+idNow+" has been deleted.");
        })
    })
    
    it('List invalid object', () =>{
        const idNow = Cypress.env('createdId');
        cy.request({
            method: "GET",
            url: urlApi+"/"+idNow,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body.error).to.equal("Oject with id="+idNow+" was not found.");
        })
    })
    
    it('Delete invalid object', () =>{
        const idNow = Cypress.env('createdId');
        cy.request({
            method: "DELETE",
            url: urlApi+"/"+idNow,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body.error).to.equal("Object with id = "+idNow+" doesn't exist.");
        })
    })

})