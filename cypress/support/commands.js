// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('inserir', () => {
        cy.visit('https://qa-catalogo-de-filmes.vercel.app/');
        cy.get('input[id="username"]').type('João');
        cy.contains('button', 'Acessar').click();
        cy.get('button[id="add-movie-btn"]').click();
        cy.get('input[id="title"]').type('The Batman');
        cy.get('input[id="year"]').type('2022');
        cy.get('input[id="genre"]').type('Ação');
        cy.get('textarea[id="synopsis"]').type('Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.');
        cy.contains('button', 'Salvar').click();
        cy.get('span[id="close-modal"]').click();
        cy.get('button[id="show-movies-btn"]').click();
        // cy.get('ul[id="movies"]').find('li').should('contain', 'The Batman');
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })