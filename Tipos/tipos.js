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
