/// <reference types="cypress"/>

describe('Cadastro', () => {

    let userData

    // Carrega o fixture antes de todos os testes
    before(() => {
        cy.fixture('user').then((data) => {
            userData = data
        })
    })

    // Cenario 1
    it('Cadastro com sucesso', () =>{
        // 1 - Acessar tela de cadastro
        cy.visit('https://automationpratice.com.br/register')

        // 2 - Preencher nome valido
        cy.get('#user').type(userData.valid.name) //input id="user"

        // 3 - Preencher email valido
        cy.get('#email').type(userData.valid.email) //input id="email"
        
        // 4 - Preencher senha valida
        cy.get('#password').type(userData.valid.password) //input id="password"
        
        // 5 - Clicar em cadastro
        cy.get('#btnRegister').click() //button id="btnRegister"

        // Deve logar na aplicação e exibir mensagem de sucesso.
        cy.get('#swal2-title').should('have.text','Cadastro realizado!')
    })

    // Cenario 2
    it('Cadastro sem nome preenchido', () =>{
        // 1 - Acessar tela de cadastro
        cy.visit('https://automationpratice.com.br/register')

        // 2 - Preencher email valido
        cy.get('#email').type(userData.valid.email) //input id="email"
        
        // 3 - Preencher senha valida
        cy.get('#password').type(userData.valid.password) //input id="password"
        
        // 4 - Clicar em cadastro
        cy.get('#btnRegister').click() //button id="btnRegister"

        // Deve logar na aplicação e exibir mensagem de sucesso.
        cy.get('#errorMessageFirstName').should('have.text','O campo nome deve ser prenchido')
        
    })

    // Cenario 3
    it('Cadastro com email inválido', () =>{
        // 1 - Acessar tela de cadastro
        cy.visit('https://automationpratice.com.br/register')

        // 2 - Preencher nome valido
        cy.get('#user').type(userData.valid.name) //input id="user"

        // 3 - Preencher email valido
        cy.get('#email').type(userData.invalid.email) //input id="email"
        
        // 4 - Preencher senha valida
        cy.get('#password').type(userData.valid.password) //input id="password"
        
        // 5 - Clicar em cadastro
        cy.get('#btnRegister').click() //button id="btnRegister"

        // Deve logar na aplicação e exibir mensagem de sucesso.
        cy.get('#errorMessageFirstName').should('have.text','O campo e-mail deve ser prenchido corretamente')
        
    })

    // Cenario 4
    it('Cadastro com senha inválida', () =>{
        // 1 - Acessar tela de cadastro
        cy.visit('https://automationpratice.com.br/register')

        // 2 - Preencher nome valido
        cy.get('#user').type(userData.valid.name) //input id="user"

        // 3 - Preencher email valido
        cy.get('#email').type(userData.valid.email) //input id="email"
        
        // 4 - Preencher senha valida
        cy.get('#password').type(userData.invalid.password) //input id="password"
        
        // 5 - Clicar em cadastro
        cy.get('#btnRegister').click() //button id="btnRegister"

        // Deve logar na aplicação e exibir mensagem de sucesso.
        cy.get('#errorMessageFirstName').should('have.text','O campo senha deve ter pelo menos 6 dígitos')
        
    })

})