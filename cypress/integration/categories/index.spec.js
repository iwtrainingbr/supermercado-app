describe('Testes da tela de listar categorias', () => {
  beforeEach(() => {
    cy.viewport('iphone-8');
    cy.visit('http://localhost:3000')
  })

  function login () {
    cy.get('[data-cy="email"]').type('chiquim@email.com');
    cy.get('[data-cy="password"]').type('12345678');
    cy.get('[data-cy="btn-enter"]').click();
  }

  it('Testando pagina de categorias', () => {
    login()

    cy.wait(2000);

    cy.get('[data-cy="menu-sidebar"]').click();

    cy.contains('Categorias');

    cy.wait(2000);

    cy.get('[data-cy="menu-categories"]').click();

    cy.wait(2000);

    cy.contains('- Categorias -')

    cy.wait(2000);

    cy.contains('Bebidas');
  })
})
