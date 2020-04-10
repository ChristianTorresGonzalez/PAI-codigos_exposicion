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

'use strict'

/**
* @description Funcion de la calculadora para calcular la suma
* @param {Number} a Numero 1
* @param {Number} b Numero 2
* @returns En esta funcion, retornamos el valor de la suma
*/
function calculadoraSuma(a, b) {
  return (a + b);
}

/**
* @description Funcion de la calculadora para calcular la resta
* @param {Number} a Numero 1
* @param {Number} b Numero 2
* @returns En esta funcion, retornamos el valor de la resta
*/
function calculadoraResta(a, b) {
  return (a - b);
}

/**
* @description Funcion de la calculadora para calcular la multiplicacion
* @param {Number} a Numero 1
* @param {Number} b Numero 2
* @returns En esta funcion, retornamos el valor de la multiplicacion
*/
function calculadoraMultiplicacion(a, b) {
  return (a * b);
}

/**
* @description Funcion de la calculadora para calcular la division
* @param {Number} a Numero 1
* @param {Number} b Numero 2
* @returns En esta funcion, retornamos el valor de la division
*/
function calculadoraDivision(a, b) {
  return (a / b);
}

/**
* @description Funcion main de la calculadora
* @param {Number} a Numero 1
* @param {Number} b Numero 2
* @returns En esta funcion, no retornamos nada ya que solo mostramospor pantalla
*/
function main(){
  console.log("La suma de 5 + 5 es: " + calculadoraSuma(5, 5));
  console.log("La suma de 10 - 5 es: " + calculadoraResta(10, 5));
  console.log("La suma de 20 * 5 es: " + calculadoraMultiplicacion(20, 5));
  console.log("La suma de 50 * 5 es: " + calculadoraDivision(50, 5));
}

main()

module.exports = {calculadoraSuma, calculadoraResta, calculadoraMultiplicacion, calculadoraDivision}