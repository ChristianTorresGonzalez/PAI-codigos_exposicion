/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Presentacion PAI - CI, Travis CI y CodeCov
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  *          Jorge Acevedo de Leon     alu0101123622@ull.edu.es
  * @description: Programa que simula una calculadora
  * @since 28/03/2020
  * @file Fichero de implementacion de ejercicios
  * @version 1.0.0
  * Historial de revisiones
  *            01/04/2020 - Inicio del trabajo
*/

const expect = require("chai").expect;
let calculadora = require("../src/calculadora");
// let manbdelbrot = require("../src/mendelbrot");

describe("Test unitarios para clase calculadora:",
function() {
  describe("Probando funcion suma", function() {
  
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion suma
    * @param {}
    * @returns Mostramos en caso de funcionar la funcion, que la funcion es correcta
    */
    it ("Comprobando valor retornado de suma", function() {
      expect(calculadora.calculadoraSuma(5, 5)).to.equal(10);
    });

    // /**
    // * @description Expect para comprobar el correcto funcionamiento de funcion getter
    // * @param {}
    // * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    // */
    // it ("Comprobando valor retornado de getParteImaginaria", function() {
    //   let parteImaginaria = numeroComplejo.getParteReal();
    //   expect(parteImaginaria).to.equal(5);
    // });
  });
});