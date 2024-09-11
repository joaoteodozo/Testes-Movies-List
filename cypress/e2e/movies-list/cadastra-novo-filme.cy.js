it('Realiza o cadastro de um novo filme à lista', () => {
    cy.visit('https://qa-catalogo-de-filmes.vercel.app/');
    cy.get('input[id="username"]').type('João Teodozo');
    cy.contains('button', 'Acessar').click();
    cy.get('button[id="add-movie-btn"]').click();
    cy.get('input[id="title"]').type('The Batman');
    cy.get('input[id="year"]').type('2022');
    cy.get('input[id="genre"]').type('Ação');
    cy.get('textarea[id="synopsis"]').type('Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.');
    cy.contains('button', 'Salvar').click();
    cy.get('div[id="success-modal"]').should('contain', 'Filme cadastrado com sucesso!');
})
