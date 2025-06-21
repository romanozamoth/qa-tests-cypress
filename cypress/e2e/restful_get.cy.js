/// <reference types="cypress"/>

describe('APIs GET - Objects', () => {

    let urlApi = "https://api.restful-api.dev/objects"

    it('List all objects', () =>{
        cy.request({
            method: "GET",
            url: urlApi,
        }).then((response) => {
            console.log('RESPOSTA API:')
            console.log(response.body)
            expect(response.status).to.equal(200);
        })
    })
    
    it('List specific object', () =>{
        cy.request({
            method: "GET",
            url: urlApi+"/1",
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal('1');
            expect(response.body.name).to.equal('Google Pixel 6 Pro');
        })
    })
    
    it('List invalid object', () =>{
        cy.request({
            method: "GET",
            url: urlApi+"/oshdouhvfasf",
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(404);
        })
    })

})