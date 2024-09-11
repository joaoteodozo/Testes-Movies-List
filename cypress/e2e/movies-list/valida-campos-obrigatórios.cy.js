it('Valida se ao tentar prosseguir sem preencher o nome do usuário retorna mensagem de erro', () => {
    cy.visit('https://qa-catalogo-de-filmes.vercel.app/');
    cy.contains('button', 'Acessar').click();
    cy.get('input[id="username"]').should('have.prop', 'validationMessage', 'Preencha este campo.');
})

it('Valida se ao tentar prosseguir sem preencher o título do filme retorna mensagem de erro', () => {
    cy.visit('https://qa-catalogo-de-filmes.vercel.app/');
    cy.get('input[id="username"]').type('João Teodozo');
    cy.contains('button', 'Acessar').click();
    cy.get('button[id="add-movie-btn"]').click();
    cy.contains('button', 'Salvar').click();
    cy.get('input[id="title"]').should('have.prop', 'validationMessage', 'Preencha este campo.');
})

it('Valida se ao tentar prosseguir sem preencher o ano do filme retorna mensagem de erro', () => {
    cy.visit('https://qa-catalogo-de-filmes.vercel.app/');
    cy.get('input[id="username"]').type('João Teodozo');
    cy.contains('button', 'Acessar').click();
    cy.get('button[id="add-movie-btn"]').click();
    cy.get('input[id="title"]').type('The Batman');
    cy.contains('button', 'Salvar').click();
    cy.get('input[id="year"]').should('have.prop', 'validationMessage', 'Preencha este campo.');
})

it('Valida se ao tentar prosseguir sem preencher o gênero do filme retorna mensagem de erro', () => {
    cy.visit('https://qa-catalogo-de-filmes.vercel.app/');
    cy.get('input[id="username"]').type('João Teodozo');
    cy.contains('button', 'Acessar').click();
    cy.get('button[id="add-movie-btn"]').click();
    cy.get('input[id="title"]').type('The Batman');
    cy.get('input[id="year"]').type('2022');
    cy.contains('button', 'Salvar').click();
    cy.get('input[id="genre"]').should('have.prop', 'validationMessage', 'Preencha este campo.');
})

it('Valida se ao tentar prosseguir sem preencher a sinopse do filme retorna mensagem de erro', () => {
    cy.visit('https://qa-catalogo-de-filmes.vercel.app/');
    cy.get('input[id="username"]').type('João Teodozo');
    cy.contains('button', 'Acessar').click();
    cy.get('button[id="add-movie-btn"]').click();
    cy.get('input[id="title"]').type('The Batman');
    cy.get('input[id="year"]').type('2022');
    cy.get('input[id="genre"]').type('Ação');
    cy.contains('button', 'Salvar').click();
    cy.get('textarea[id="synopsis"]').should('have.prop', 'validationMessage', 'Preencha este campo.');
})