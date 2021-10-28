describe('Teste para a tela de login', () => {
  beforeEach(() => {
    cy.viewport('iphone-8');
    cy.visit('http://localhost:3000');
  });

  it('Garantindo o usuario consegue fazer login', () => {
    cy.contains('Login');

    cy.get('[data-cy="email"]').type('chiquim@email.com');

    cy.get('[data-cy="password"]').type('12345678');

    cy.get('[data-cy="btn-enter"]').click();

    cy.contains('Seja Bem Vindo');
  });
})







//
