// os tipos são inferidos
// string
var nome = 'Jean';
console.log(nome);
// numbers 
var idade = 27;
//boolean
var possuiDinheiro = true;
console.log(possuiDinheiro);
// tipos explicitos
var idades;
var meuNome;
var possui;
//array
var hobbies = ["Lavar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
//Tuplas
var endereco = ["Av Principal", 99];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Azul"] = 1] = "Azul";
    Cor[Cor["Preto"] = 2] = "Preto";
})(Cor || (Cor = {}));
var minhaCor = Cor.Azul;
console.log(minhaCor.toString);
// any
var carro = 'Ferrari';
console.log(carro);
carro = { marca: 'Ferrari', ano: 2020 };
console.log(carro);
// Funcoes
function retornaMeunome() {
    return nome;
}
console.log(retornaMeunome);
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(5, 9));
// tipo função -> declara uma variavel que vai receber uma funcao de tipo especifico
var calculo;
calculo = multiplicar;
console.log(calculo(6, 5));
// objetos
var usuario = {
    nome: 'Jean',
    idade: 25
};
usuario = {
    nome: 'Maria',
    idade: 24
};
console.log(usuario);
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
// never -> nunca vai retorna, loop infinito ou termina com erro
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'JE',
    preco: -1,
    validarProduto: function () {
        if (this.nome.trim.length == 0) {
            falha('Precisa do nome');
        }
        if (this.preco <= 0) {
            falha('Preco invaliod');
        }
    }
};
produto.validarProduto();
