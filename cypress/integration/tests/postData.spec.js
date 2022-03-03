import { textosRegistro } from '../../constants/texts';

describe('Prueba de Post de contenidos del formulario', () => {
  beforeEach('Acceso y login', () => {
    //cy.viewport(375, 667);
    cy.visit('/login/');
    cy.get('.cp-close').click();
    cy.get('#dni').type(textosRegistro.datosDeclarante.dni);
    cy.get('#clave').type(textosRegistro.datosDeclarante.clave);
    cy.get('#btn-login').click();
    cy.contains('Continuar la declaración').click();
  });

  it('Enviar datos', () => {
    cy.form_request('/borrador', formData).then((response) => {
      // do stuff with your response
    });
  });
}); // Cierre de describe
