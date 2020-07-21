"use strict";
function saudarcomOla(pessoa) {
    console.log('Ola, ' + pessoa.nome);
}
var pessoa = {
    nome: 'Jean',
    idade: 22
};
saudarcomOla(pessoa);
// Usando classes
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = 'Jean';
    }
    return Cliente;
}());
var potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(2, 3));
var RealABC = /** @class */ (function () {
    function RealABC() {
    }
    RealABC.prototype.a = function () { };
    RealABC.prototype.b = function () { };
    RealABC.prototype.c = function () { };
    return RealABC;
}());
