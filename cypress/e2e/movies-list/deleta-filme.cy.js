it('Realiza a exclusão de um filme', () => {
    cy.inserir();
    cy.contains('button', 'Deletar').click();
    cy.get('div[id="delete-success-modal"]').should('contain', 'Filme deletado com sucesso!');
})