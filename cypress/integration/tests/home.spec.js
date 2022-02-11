/// <reference types="Cypress" /> 

require('cypress-xpath') // Cuando se utilice el xpath como selector
require('cypress-plugin-tab') // Cuando se utilice la función .tab para saltar de campo


describe("Home", () => {  // Nombre de la Test Suite

    before("Carga de página", () => {
        // Buena practica: definir el viewport y la url base en el cypress.json
        cy.visit("/")
        // Cypress.Cookies.preserveOnce('PHPSESSID','PHPSESUS')
    });

    it("[T01001] Debería poder aceptar las cookies", () => {
        cy.get('.cp-close').should("be.visible").click()
    });

    it("[T01002] Debería poder configurar las cookies", () => {
        cy.get('[class="pop_config_cookies"]').should("be.visible").click()
        cy.get('.cp-guardar').click()
    });

    it.only("[T01003] Debería acceder a a las secciones destacadas con los iconos", () => {
        // Selección por la categoría del destacado. Fallaría si cambián el destacado, no el orden.
        cy.get('[data-id="1249"]').should("be.visible").click()
        cy.go("back")
        cy.get('[data-id="1284"]').should("be.visible").click()
        cy.go("back")
        cy.get('[data-id="1247"]').should("be.visible").click()
        cy.go("back")
        cy.get('[data-id="1319"]').should("be.visible").click()
        cy.go("back")
        cy.pause() // sirve para parar el test en la consola

        // Selección por la posición en la página del destacado. 
        cy.get(':nth-child(1) > .destacados > .cat_home > .img-fluid').click() 
        cy.go("back")
        // Se pueden quitar etiquetas hasta que no se pueda hacer la selección única
        cy.get(':nth-child(2) > .destacados').click() 
        cy.go("back")
    });

    it("[T01004] Debería buscar", () => {
        cy.get('#input_search').clear().type("Champú")
        cy.get('#btn_search').click()
    });

    it("[T01005] Debería acceder a Nuestras tiendas", () => {
        cy.get('.d-none > .float-left > :nth-child(1) > a').click()
        cy.go("back")
    });

    it("[T01006] Debería acceder a Atención al cliente", () => {
        cy.get('.d-none > .float-left > :nth-child(2) > a').click()
        cy.go("back")
    });

    it("[T01011] Debería acceder a Atención al cliente", () => {
        cy.get('.float-right > :nth-child(2) > .btn').click()
        cy.go("back")
    });

    it("[T01016] Debería acceder a Síguenos en Instagram", () => {
        //Abrir en la misma ventana con función invoke
        //Si la página tiene aviso de cookies sin aceptar hay que quitar la seguridad de Chrorme
        //Incluir en el cypress.json "chromeWebSecurity": false
       cy.xpath('//*[@id="home"]/footer/div/ul[2]/li/a').invoke("removeAttr", "target").click()
       cy.wait(1000)
       cy.go("back")
    });


    

});// Cierre de describe

