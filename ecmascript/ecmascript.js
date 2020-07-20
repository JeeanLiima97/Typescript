"use strict";
// let & const
//var = global dentro do contexto ou local dentro de uma função
// 
var seraQuePode = '?';
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco';
    console.log(acao);
}
// const - imutavel --> escopo de bloco 
var cpf = '123.412.321-44';
//cpf = '321313122131'
console.log(cpf);
function relevar() {
    var segredo = 'interno';
    console.log(segredo);
}
//console.log(segredo);
//arrowfunction 
var soma = function (n1, n2) { return n1 + n2; };
console.log(soma(5, 5));
var falarCom = function (pessoa) { return console.log('Ola ' + pessoa); };
falarCom('Jean');
//Parametro padrão
function contagemRegressiva(inicio) {
    if (inicio === void 0) { inicio = 3; }
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim");
}
contagemRegressiva();
contagemRegressiva(5);
// Rest e Spread
//... espalha os elementos do array
var numbers = [1, 10, 99, 5];
console.log(Math.max.apply(Math, numbers));
//juntando os elementos para criar um array
function retornaArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numeros = retornaArray(1, 2, 4, 56, 76);
console.log(numeros);
// Rest & Spread (Tupla)
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
// Destructuring (Array)
var carecteristicas = ['Motor Zetec', 2020];
// const motor = carecteristicas[0]
// const ano = carecteristicas[1]
var motor = carecteristicas[0], ano = carecteristicas[1];
console.log(motor);
console.log(ano);
// Destructuring (Objeto)
var item = {
    nome: 'SSD 480gb',
    preco: 200
};
// const nomeItem = item.nome
// const preco = item.preco
var n = item.nome, p = item.preco;
console.log(n);
console.log(p);
// Callback
function esperar3s(callback) {
    setTimeout(function () {
        callback('3s depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
fetch('https://swapi.dev/api/people/1/ ')
    .then(function (res) { return res.json(); })
    .then(function (personagem) { return personagem.films; })
    .then(function (films) { return fetch(films[0]); })
    .then(function (resFilm) { return resFilm.json(); })
    .then(function (filme) { return console.log(filme.title); });
