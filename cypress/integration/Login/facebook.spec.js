describe('Testando a pagina de login do facebook', () => {
  beforeEach(() => {
    cy.viewport('iphone-8');
    cy.visit('http://m.facebook.com');
  });

  it('testando login', () => {
    cy.get('[class="_54k8 _56bs _4n44 _6gg6 _901w _56bv _52jh"]').click();

    cy.get('#m_login_email').type('chiquim@email.com');

    cy.get('#m_login_password').type('12345678');

    cy.get('[name="login"]').click();
  })
});
