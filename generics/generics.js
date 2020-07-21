"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Jean'));
// nao acusa o erro
console.log(echo(23).length);
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Jean').length);
console.log(echoMelhorado(23));
// Generics disponiveis na API
var avaliacoes = [10, 40, 7.7];
avaliacoes.push(8, 5);
console.log(avaliacoes);
