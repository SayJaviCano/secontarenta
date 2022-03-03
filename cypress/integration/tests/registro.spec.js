import { textosRegistro } from '../../constants/texts';

describe('TS01 - Registro', () => {
  // Nombre de la Test Suite

  beforeEach('Carga de página', () => {
    // Buena practica: definir el viewport y la url base en el cypress.json
    cy.visit('/');
  });

  it('[T01001] Debería poder configurar las cookies', () => {
    cy.get(':nth-child(1) > .pop_config_cookies').should('be.visible').click();
    cy.get('label > span').click();
    cy.get('.cp-guardar').click();
  });

  it('[T01002] Debería poder aceptar las cookies', () => {
    cy.get('.cp-close').click();
  });

  it('[T01003] Debería contener los nombres de los campos', () => {
    // cy.contains('.placeholder', textosRegistro.nombreCampo.nombre);
    cy.get('#registro_form').contains(textosRegistro.nombreCampo.nombre);
    cy.get('#registro_form').contains(textosRegistro.nombreCampo.apellidos);
    cy.get('#registro_form').contains(textosRegistro.nombreCampo.dni);
    cy.get('#registro_form').contains(textosRegistro.nombreCampo.mail);
    cy.get('#registro_form').contains(textosRegistro.nombreCampo.telefono);
    cy.get('#registro_form').contains(textosRegistro.nombreCampo.clave);
    cy.get('#registro_form').contains(textosRegistro.nombreCampo.clave2);
  });

  it('[T01004] Debería poder registrarme', () => {
    cy.get('#nombre').type(textosRegistro.datosDeclarante.nombre);
    cy.get('#apellidos').type(textosRegistro.datosDeclarante.apellidos);
    cy.get('#dni').type(textosRegistro.datosDeclarante.dni);
    cy.get('#email').type(textosRegistro.datosDeclarante.mail);
    cy.get('#telefono').type(textosRegistro.datosDeclarante.telefono);
    cy.get('#clave').type(textosRegistro.datosDeclarante.clave);
    cy.get('#clave2').type(textosRegistro.datosDeclarante.clave2);
    cy.get('[type="checkbox"]').check({ force: true });
    // Para terminar el registro hay que quitar el iframe de Google
  });

  it('[T01005] Debería mostrar el texto del error en cada campo', () => {
    cy.get('.cp-close').click();
    cy.get('#btn-registro').click();
    cy.get('#invalid_nombre').should(
      'have.text',
      textosRegistro.mensajesError.nombre
    );
    cy.get('#invalid_apellidos').should(
      'have.text',
      textosRegistro.mensajesError.apellidos
    );
    cy.get('#invalid_dni').should(
      'have.text',
      textosRegistro.mensajesError.dni
    );
    cy.get('#invalid_email').should(
      'have.text',
      textosRegistro.mensajesError.email
    );
    cy.get('#invalid_telefono').should(
      'have.text',
      textosRegistro.mensajesError.telefono
    );
    cy.get('#invalid_clave').should(
      'have.text',
      textosRegistro.mensajesError.clave
    );
    cy.get('#invalid_clave2').should(
      'have.text',
      textosRegistro.mensajesError.clave2
    );
    cy.get('#invalid_acepto_politica').should(
      'have.text',
      textosRegistro.mensajesError.legal
    );
  });
}); // Cierre de describe
