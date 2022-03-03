import { textosRegistro } from '../../constants/texts';

describe('Contenido', () => {
  // Nombre de la Test Suite

  before('Acceso y login', () => {
    cy.visit('/login/');
    cy.get('.cp-close').click();
    cy.get('#dni').type(textosRegistro.datosDeclarante.dni);
    cy.get('#clave').type(textosRegistro.datosDeclarante.clave);
    cy.get('#btn-login').click();
    cy.get('.form_padd2 > .btn').click();
  });

  // Comprobación del contenido
  // No funcionará si el formulario no contiene datos previos. Meter esta validación en el test formulario
  it('[T01002] Debería contener los textos guardados', () => {
    cy.get('#nombre_declarante').should(
      'have.value',
      textosRegistro.datosDeclarante.nombre
    );
    cy.get('[type="radio"][name="sexo_declarante"]').should('be.checked');
    cy.get('[type="radio"][name="estado_civil_declarante"]').should(
      'be.checked'
    );
  });
}); // Cierre de describe
