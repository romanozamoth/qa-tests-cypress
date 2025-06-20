/// <reference types="cypress"/>

describe('Login', () => {

    let userData

    // Carrega o fixture antes de todos os testes
    before(() => {
        cy.fixture('user').then((data) => {
            userData = data
        })
    })

    // Cenario 1
    it('Login com sucesso', () =>{
        // 1 - Acessar tela de login
        cy.visit('https://automationpratice.com.br/login')

        // 2 - Preencher email valido
        cy.get('#user').type(userData.valid.email) //input id="user"
        
        // 3 - Preencher senha valida
        cy.get('#password').type(userData.valid.password) //input id="password"
        
        // 4 - Clicar em login
        cy.get('#btnLogin').click() //button id="btnLogin"

        // Deve logar na aplicação e exibir mensagem de sucesso.
        cy.get('#swal2-title').should('have.text','Login realizado')
    })

    // Cenario 2
    it('Login com email inválido', () =>{
        // 1 - Acessar tela de login
        cy.visit('https://automationpratice.com.br/login')

        // 2 - Preencher email invalido
        cy.get('#user').type(userData.invalid.email) //input id="user"
        
        // 3 - Preencher senha valida
        cy.get('#password').type(userData.valid.password) //input id="password"
        
        // 4 - Clicar em login
        cy.get('#btnLogin').click() //button id="btnLogin"

        // Deve logar na aplicação e exibir mensagem de sucesso.
        cy.get('.invalid_input').should('have.text','E-mail inválido.')
        
    })

    // Cenario 3
    it('Login com senha inválida', () =>{
        // 1 - Acessar tela de login
        cy.visit('https://automationpratice.com.br/login')
        // 2 - Preencher email valido
        cy.get('#user').type(userData.valid.email) //input id="user"
        
        // 3 - Preencher senha invalida
        cy.get('#password').type(userData.invalid.password) //input id="password"
        
        // 4 - Clicar em login
        cy.get('#btnLogin').click() //button id="btnLogin"

        // Deve logar na aplicação e exibir mensagem de sucesso.
        cy.get('.invalid_input').should('have.text','Senha inválida.')
        
    })

})