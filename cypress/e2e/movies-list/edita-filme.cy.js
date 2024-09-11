it('Realiza a edição de um filme', () => {
    cy.inserir();
    cy.contains('button', 'Editar').click();
    cy.get('input[id="title"]').type('Divertida mente 2');
    cy.get('input[id="year"]').type('2022');
    cy.get('input[id="genre"]').type('Animação');
    cy.get('textarea[id="synopsis"]').type('Com um salto temporal, Riley se encontra mais velha, passando pela tão temida adolescência. Junto com o amadurecimento, a sala de controle também está passando por uma adaptação para dar lugar a algo totalmente inesperado: novas emoções. As já conhecidas, Alegria, Raiva, Medo, Nojinho e Tristeza não têm certeza de como se sentir quando novos inquilinos chegam ao local.');
    cy.contains('button', 'Salvar').click();
    cy.get('div[id="success-modal"]').should('contain', 'Filme editado com sucesso!');
})