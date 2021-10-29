describe('testes da tela de produtos' ,() => {
  beforeEach (() => {
    cy.viewport('iphone-8');
    cy.visit('http://localhost:3000');

  });
  function login () {
    cy.get('[data-cy="email"]').type('chiquim@email.com');
    cy.get('[data-cy="password"]').type('12345678');
    cy.get('[data-cy="btn-enter"]').click();
  }

  it('testando pasta de produtos' , () => {
    login();

    cy.wait(1000);

    cy.get('[data-cy="menu-sidebar"]').click();

    cy.contains('Produtos')

    cy.get('[data-cy="menu-products"]').click();
    cy.contains('Ypioca')

  });

});
