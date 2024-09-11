it('Valida se ao não inserir nenhum filme na lista, retorna mensagem para incluir ao menos 1 filme', () => {
    cy.visit('https://qa-catalogo-de-filmes.vercel.app/');
    cy.get('input[id="username"]').type('João Teodozo');
    cy.contains('button', 'Acessar').click();
    cy.get('button[id="show-movies-btn"]').click();
    cy.get('ul[id="movies"]').find('li').should('contain', 'Lista vazia. Adicione pelo menos 1 filme para visualizar a lista!');
})

it('Valida se após a inserção de um novo filme, ele fica visível na lista', () => {
    cy.inserir();
    cy.get('ul[id="movies"]').find('li').should('contain', 'The Batman');
})