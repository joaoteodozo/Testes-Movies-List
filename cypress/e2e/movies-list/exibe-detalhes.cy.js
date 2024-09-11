it('Exibe os detalhes do filme cadastrado', () => {
    cy.inserir();
    cy.contains('button', 'Ver Detalhes').click();
    cy.get('.movie-title strong').should('have.text', 'The Batman');
    cy.get('#details-0').should('contain', 'Ano: 2022');
    cy.get('#details-0').should('contain', 'Gênero: Ação');
    cy.get('#details-0').should('contain', 'Sinopse: Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.');
})