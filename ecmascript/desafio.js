"use strict";
// // Exercicio 1
// var dobro = function(valor) {
//     return valor * 2
// }
// console.log(dobro(10))
// // Exercicio 2
// var dizerOla = function (nome) {
//     if (nome === undefined) { nome = "Pessoa" }
//     console.log("Ola, " + nome)
// }
// dizerOla()
// dizerOla("Anna")
// // Exercicio 3
// var nums = [-3, 33, 38, 5]
// console.log('???')
// // Exercicio 4
// var array = [55, 20]
// console.log(array)
// // Exercicio 5
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
// console.log(nota1, nota2, nota3)
// // Exercicio 6
// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)
// Resposta 1 -> arrow function
var dobro = function (valor) { return valor * 2; };
console.log(dobro(2));
// resposta 2 -> Parametro padrão
var dizerOla = function (nome) {
    if (nome === void 0) { nome = 'Pessoa'; }
    console.log('Ola, ' + nome);
};
// resposta 3
var nums = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums));
// Resposta 4
var array = [55, 20];
array.push.apply(array, nums);
console.log(array);
// Resposta 5
var notas = [8.5, 6.3, 9.4];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1);
console.log(nota2);
console.log(nota3);
//Resposta 6
var cientista = { primeiroNome: "Will", experiencia: 12 };
var primeiroNome = cientista.primeiroNome, experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
