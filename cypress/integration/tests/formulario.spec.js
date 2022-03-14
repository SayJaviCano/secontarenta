import { selectoresFormulario } from '../../constants/selectors';
import { textosRegistro } from '../../constants/texts';

describe('TS3 - Declaración casado/a', () => {
  // Nombre de la Test Suite

  beforeEach('Acceso y login', () => {
    //cy.viewport(375, 667);
    cy.visit('/login/');
    cy.get('.cp-close').click();
    cy.get('#dni').type(textosRegistro.datosDeclarante.dni);
    cy.get('#clave').type(textosRegistro.datosDeclarante.clave);
    cy.get('#btn-login').click();
    cy.contains('Continuar la declaración').click();
  });

  // after('Borrar documentos subidos', () => {
  //   cy.get('#borrador').then(($body) => {
  //     if ($body.text().includes('Borrar')) {
  //       cy.contains('Borrar').click({ force: true });
  //     } else {
  //     }
  //   });
  //   // cy.get('#s6').then(($body) => {
  //   //   if ($body.text().includes('Borrar')) {
  //   //     cy.contains('Borrar').click({ force: true });
  //   //   } else {
  //   //   }
  //   // });
  // });

  it('[TS3C1] Debería grabar los datos del declarante ', () => {
    cy.get('#fecha_expedicion_dni_declarante')
      .click()
      .type(textosRegistro.datosDeclarante.expedicionDni, '{esc}');
    cy
      .get('#fecha_caducidad_dni_declarante')
      .type(textosRegistro.datosDeclarante.caducidadDni),
      cy
        .get('#fecha_nacimiento_declarante')
        .type(textosRegistro.datosDeclarante.fechaNacimiento),
      cy
        .get('[type="radio"][name="sexo_declarante"]')
        .check('M', { force: true });

    cy.get('[type="radio"][name="estado_civil_declarante"]').check('2', {
      force: true,
    });
    cy.get('#minusvalia_declarante').select('0');
    cy.get('#movilidad_reducida_declarante').select('0');
    cy.get('#importe_casilla_renta_anterior_declarante')
      .clear()
      .type(textosRegistro.datosDeclarante.casilla);
    cy.get('#IBAN_declarante')
      .clear()
      .type(textosRegistro.datosDeclarante.banco);

    cy.get('#s1 button[type="submit"]').contains('Guardar y seguir').click();
  });

  it('[TS3C2] Debería grabar los datos del conyugue', () => {
    cy.get('#s2 [type="button"]')
      .contains('Sección 2: Datos del cónyuge')
      .click();
    cy.get('#nombre_conyuge').clear().type(textosRegistro.datosConyugue.nombre);
    cy.get('#apellidos_conyuge')
      .clear()
      .type(textosRegistro.datosConyugue.apellidos);
    cy.get('#dni_conyuge').clear().type(textosRegistro.datosConyugue.dni);
    cy.get('#fecha_expedicion_dni_conyuge')
      .click()
      .type(textosRegistro.datosConyugue.expedicionDni, '{esc}');
    cy.get('#fecha_caducidad_dni_conyuge').type(
      textosRegistro.datosConyugue.caducidadDni
    );
    cy.get('#fecha_nacimiento_conyuge').type(
      textosRegistro.datosConyugue.fechaNacimiento
    );
    cy.get('#email_conyuge').clear().type(textosRegistro.datosConyugue.mail);
    cy.get('#telefono_conyuge')
      .clear()
      .type(textosRegistro.datosConyugue.telefono);
    cy.get('[type="radio"][name="sexo_conyuge"]').check('F', { force: true });
    cy.get('#importe_casilla_renta_anterior_conyuge')
      .clear()
      .type(textosRegistro.datosConyugue.casilla);
    cy.get('#IBAN_conyuge').clear().type(textosRegistro.datosConyugue.banco);
    cy.get('#s2 button[type="submit"]').contains('Guardar y seguir').click();
  });

  it('[TS3C3] Debería grabar los datos de los hijos', () => {
    cy.get('#s3 [type="button"]').contains('Sección 3: Hijos').click();
    cy.get('[type="radio"][name="hijos"]').check('1', { force: true });
    cy.get('[class="form-select"][name="progenitor_hijo_1"]').select('3');
    cy.get('[class="form-select"][name="minusvalia_hijo_1"]').select('0');
    cy.get('[class="form-select"][name="movilidad_reducida_hijo_1"]').select(
      '0'
    );
    cy.get('#ingresos_hijo_1').clear().type('100');
    cy.get('#dni_hijo_1').type(textosRegistro.datosHijo1.dni);
    cy.get('#fecha_nacimineto_hijo_1').type(
      textosRegistro.datosHijo1.fechaNacimiento,
      '{esc}'
    );
    cy.get('#nombre_hijo_1').clear().type(textosRegistro.datosHijo1.nombre);
    cy.get('#s3 button[type="submit"]').contains('Guardar y seguir').click();
  });

  it('[TS3C4] Debería grabar los datos de los ascendientes', () => {
    cy.get('#s4 [type="button"]').contains('Sección 4: Ascendientes').click();
    cy.get('[type="radio"][name="ascendientes"]').check('1', { force: true });
    cy.get('#parentesco_ascendiente_1').select('2');
    cy.get('[class="form-select"][name="minusvalia_ascendiente_1"]').select(
      '0'
    );
    cy.get(
      '[class="form-select"][name="movilidad_reducida_ascendiente_1"]'
    ).select('0');
    cy.get('#ingresos_ascendiente_1').clear().type('100');
    cy.get('#dni_ascendiente_1').type(textosRegistro.ascendiente1.dni, {
      force: true,
    });
    cy.get('#fecha_nacimineto_ascendiente_1')
      .click()
      .type(textosRegistro.ascendiente1.fechaNacimiento);
    cy.get('#nombre_ascendiente_1')
      .clear()
      .type(textosRegistro.ascendiente1.nombre);
    cy.get('.add-ascendiente').click();
    cy.get('#s4 button[type="submit"]').contains('Guardar y seguir').click();
  });

  it('[TS3C5] Debería grabar los datos del domicilio', () => {
    cy.get('#s5 [type="button"]').contains('Sección 5: Domicilio').click();

    cy.get('#direccion_declarante')
      .clear()
      .type(textosRegistro.datosDeclarante.direccion);
    cy.get('#cp_declarante').clear().type(textosRegistro.datosDeclarante.cp);
    cy.get('#comprada_vivienda_declarante[value="1"]').click({ force: true });
    cy.get('[for="vivienda_comprada_anterior_2013_declarante"]').click();
    cy.get('[name="vivienda_comprada_hipoteca_declarante"]').select('1');

    // cy.get('[type="checkbox"][name="hipoteca_declarante"]').check('1', {
    //   force: true,
    // });

    // Si existe el documento lo borra, si no existe lo sube
    // cy.get('#s5').then(($body) => {
    //   if ($body.text().includes('Borrar')) {
    //     cy.contains('Borrar').click();
    //   } else {
    //     cy.get(selectoresFormulario.s5.botonSubirArchivo).invoke('show');
    //     cy.get(selectoresFormulario.s5.botonSubirArchivo)
    //       .attachFile('prueba-imagen.jpg')
    //       .trigger('input');
    //   }
    // });
    // Fin de código verificación

    cy.get('#s5 button[type="submit"]').contains('Guardar y seguir').click();
  });

  it('[TS3C6] Debería grabar los datos de rendimientos del trabajo', () => {
    cy.get('#s6 [type="button"]')
      .contains('Sección 6: Rendimientos del trabajo')
      .click();
    cy.get('#pension_expareja_rt_declarante_si').check({
      force: true,
    });
    cy.get('#pension_expareja_cantidad_rt_declarante').clear().type('100');
    cy.get('#cambio_domicilio_rt_declarante_no[value="0"]').check({
      force: true,
    });
    cy.get('#cuotas_sindicales_rt_declarante').clear().type(100);
    cy.get('#cuota_c_profesional_rt_declarante').clear().type(200);
    cy.get('#autonomo_rt_declarante_2').check({ force: true });
    cy.get('#cuantas_actividades_alta_rt_declarante').clear().type('2');
    // //
    // // Si existe el documento lo borra, si no existe lo sube
    cy.get('#div_file_libro_registro_compras_rt_declarante').then(($body) => {
      if ($body.text().includes('Borrar')) {
        cy.contains('Borrar').click({ force: true });
      } else {
        cy.get(
          'input[type="file"][name="file_libro_registro_compras_rt_declarante"]'
        ).invoke('show');
        cy.get(
          'input[type="file"][name="file_libro_registro_compras_rt_declarante"]'
        )
          .attachFile('prueba-imagen.jpg')
          .trigger('input');
      }
    });
    // // Fin de código verificación

    // // Si existe el documento lo borra, si no existe lo sube
    cy.get('#div_file_libro_registro_ventas_rt_declarante').then(($body) => {
      if ($body.text().includes('Borrar')) {
        cy.contains('Borrar').click({ force: true });
      } else {
        cy.get(
          'input[type="file"][name="file_libro_registro_ventas_rt_declarante"]'
        ).invoke('show');
        cy.get(
          'input[type="file"][name="file_libro_registro_ventas_rt_declarante"]'
        )
          .attachFile('prueba-imagen.jpg')
          .trigger('input');
      }
    });
    // // Fin de código verificación

    cy.get('#s6 button[type="submit"]').contains('Guardar y seguir').click();
  });

  it('[TS3C7] Debería grabar los datos de rendimiento del capital inmobiliario', () => {
    cy.get('#s7 [type="button"]')
      .contains('Sección 7: Rendimientos del capital inmobiliario')
      .click();
    cy.get('[type="radio"][name="alquilado_rci_declarante"]').check('1', {
      force: true,
    });
    cy.get('#direccion_alquiler_rci_declarante_1')
      .clear()
      .type('Dirección completa de la propiedad');
    cy.get('#de_fecha_alquiler_rci_declarante_1').type('2021-01-01', '{esc}');
    cy.get('#hasta_fecha_alquiler_rci_declarante_1').type(
      '2021-10-01',
      '{esc}'
    );
    cy.get('#ingresos_anuales_rci_declarante_1').clear().type('1000');
    cy.get('#gasto_comunidad_alquiler_rci_declarante_1').clear().type('100');
    cy.get('#gasto_suministros_alquiler_rci_declarante_1').clear().type('100');
    cy.get('#gasto_agencia_alquiler_rci_declarante_1').clear().type('100');
    cy.get('#gasto_reparaciones_alquiler_rci_declarante_1').clear().type('100');
    cy.get('#observaciones_rci_declarante_1')
      .clear()
      .type('Más 100 de otros gastos');

    // Si existe el documento lo borra, si no existe lo sube
    cy.get('#div_file_copias_facturas_alquiler_rci_declarante_1').then(
      ($body) => {
        if ($body.text().includes('Borrar')) {
          cy.contains('Borrar').click({ force: true });
        } else {
          cy.get(
            'input[type="file"][name="file_copias_facturas_alquiler_rci_declarante_1"]'
          ).invoke('show');
          cy.get(
            'input[type="file"][name="file_copias_facturas_alquiler_rci_declarante_1"]'
          )
            .attachFile('prueba-imagen.jpg')
            .trigger('input');
        }
      }
    );
    cy.get('.add-rci_declarante').click();
    cy.get('.delete-alquiler_rci_declarante').click();
    cy.get('#s7 button[type="submit"]').contains('Guardar y seguir').click();
  });

  it('[TS3C8] Debería grabar las ganancias y perdidas patrimoniales', () => {
    cy.get('#s8 [type="button"]')
      .contains('Sección 8: Ganancias y pérdidas patrimoniales')
      .click();
    cy.get('[type="radio"][name="vendido_acciones_gpp_declarante"]').check(
      '1',
      { force: true }
    );
    cy.get('#cuantas_ventas_acciones_gpp_declarante').clear().type('2');
    //
    // Si existe el documento lo borra, si no existe lo sube
    cy.get('#div_file_informacion_fiscal_gpp_declarante').then(($body) => {
      if ($body.text().includes('Borrar')) {
        cy.contains('Borrar').click({ force: true });
      } else {
        cy.get(
          'input[type="file"][name="file_informacion_fiscal_gpp_declarante"]'
        ).invoke('show');
        cy.get(
          'input[type="file"][name="file_informacion_fiscal_gpp_declarante"]'
        )
          .attachFile('prueba-imagen.jpg')
          .trigger('input');
      }
    });

    cy.get('[type="radio"][name="vendido_propiedades_gpp_declarante"]').check(
      '1',
      { force: true }
    );
    cy.get('#numero_operaciones_propiedades_gpp_declarante').clear().type('2');

    // Si existe el documento lo borra, si no existe lo sube
    cy.get('#div_file_informacion_venta_propiedades_gpp_declarante').then(
      ($body) => {
        if ($body.text().includes('Borrar')) {
          cy.contains('Borrar').click({ force: true });
        } else {
          cy.get(
            'input[type="file"][name="file_informacion_venta_propiedades_gpp_declarante"]'
          ).invoke('show');
          cy.get(
            'input[type="file"][name="file_informacion_venta_propiedades_gpp_declarante"]'
          )
            .attachFile('prueba-imagen.jpg')
            .trigger('input');
        }
      }
    );
    cy.get('#s8 button[type="submit"]').contains('Guardar y seguir').click();
  });
  it.only('[TS3C9] Debería confirmar el pago', () => {
    cy.get('#s9 [type="button"]').contains('Resumen de la declaración').click();
    cy.get(':nth-child(2) > .col-md-4 > .tx_resumen').should(
      'have.text',
      textosRegistro.datosDeclarante.nombre
    );
    cy.get(':nth-child(2) > .col-md-8 > .tx_resumen').should(
      'have.text',
      textosRegistro.datosDeclarante.apellidos
    );
    cy.get('[type="radio"][name="forma_pago"]').check('1', { force: true });
    cy.contains('Terminar y enviar').click();
  });

  //
}); // Cierre de describe
