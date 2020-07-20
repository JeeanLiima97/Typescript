"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classe criada pra ser herdada
var Calculo = /** @class */ (function () {
    function Calculo() {
        this.resultado = 0;
    }
    Calculo.prototype.getResultado = function () {
        return this.resultado;
    };
    return Calculo;
}());
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soma.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        this.resultado = numeros.reduce(function (t, a) { return t + a; });
    };
    return Soma;
}(Calculo));
var c1 = new Soma();
c1.executar(4, 5, 6, 6);
console.log(c1.getResultado());
