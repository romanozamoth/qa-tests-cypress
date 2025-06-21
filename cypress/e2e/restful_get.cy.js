/// <reference types="cypress"/>

describe('List All Objects', () => {

    let urlApi = "https://api.restful-api.dev/objects"

    // Cenario 1
    it('Response 200', () =>{
        cy.request({
            method: "GET",
            url: urlApi,
        }).then((response) => {
            expect(response.status).to.equal(200);
        })
    })

})