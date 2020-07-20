"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(3, 10, 1999);
console.log(aniversario);
var casamento = new Data; //posso omitor os "()"
casamento.ano = 2017;
console.log(casamento);
///--------------------------------------------------------------------------------------------///
var DataEsperta = /** @class */ (function () {
    function DataEsperta(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataEsperta;
}());
var aniversarioEsperto = new DataEsperta(3, 10, 1999);
console.log(aniversarioEsperto);
var casamentoEsperto = new DataEsperta;
//posso omitor os "()"
casamento.ano = 2017;
console.log(casamentoEsperto);
// Desafio classe produto
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.resumo = function () {
        return this.nome + " custa R$" + this.preco;
    };
    return Produto;
}());
var p1 = new Produto("Celular", 150);
var p2 = new Produto('Notebook', 1230);
var p3 = new Produto('Tv', 1000, 0.1);
console.log(p1.resumo());
// Getters & Setters
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this._idade = 0;
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (valor) {
            if (valor >= 0 && valor <= 100) {
                this._idade = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var pe1 = new Pessoa;
pe1.idade = 10;
console.log(pe1);
