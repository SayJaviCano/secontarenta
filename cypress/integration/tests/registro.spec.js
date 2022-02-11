
describe("Registro", () => {  // Nombre de la Test Suite

    beforeEach("Carga de página", () => {
        // Buena practica: definir el viewport y la url base en el cypress.json
        cy.visit("/")
    });

    it("[T01001] Debería poder configurar las cookies", () => {
        cy.get(':nth-child(1) > .pop_config_cookies').should("be.visible").click()
        cy.get('label > span').click()
        cy.get('.cp-guardar').click()
    });

    it("[T01002] Debería poder aceptar las cookies", () => {
        cy.get('.cp-close').click()
    });

    it("[T01003] Debería poder registrarme", () => {
        cy.get('#nombre').type("Javier")
        cy.get('#apellidos').type("Cano Rivera")
        cy.get('#dni').type("5258063X")
        cy.get('#email').type("jc@saysawa.com")
        cy.get('#telefono').type("607432812")
        cy.get('#clave').type("Guapo123")
        cy.get('#clave2').type("Guapo123")
        cy.get('[type="checkbox"]').check({force: true})
        // Para terminar el registro hay que quitar el iframe de Google
        
    });

    it("[T01004] Debería mostrar el texto del error en cada campo", () => {
        cy.get('.cp-close').click()
        cy.get('#btn-registro').click()
        cy.get('#invalid_nombre').should("have.text", "Su nombre es obligatorio")
        cy.get('#invalid_apellidos').should("have.text", "Sus apellidos son obligatorios")
        cy.get('#invalid_dni').should("have.text", "Su DNI/NIE es obligatorio" )
        cy.get('#invalid_email').should("have.text", "Su correo electrónico es obligatorio")
        cy.get('#invalid_telefono').should("have.text", "Su teléfono es obligatorio")
        cy.get('#invalid_clave').should("have.text", "Su contraseña es obligatoria")
        cy.get('#invalid_clave2').should("have.text", "Repetir contraseña es obligatorio")
        cy.get('#invalid_acepto_politica').should("have.text", "Tiene que aceptar el Aviso Legal y la Política de privacidad")
        
    });


});// Cierre de describe

