// os tipos são inferidos
// string
let nome = 'Jean'
console.log(nome);

// numbers 
let idade = 27;
//boolean

let possuiDinheiro = true;
console.log(possuiDinheiro);

// tipos explicitos

let idades: number;
let meuNome: String;
let possui: boolean;

//array

let hobbies : string[]= [ "Lavar", "Praticar esportes"]
console.log(hobbies[0])
console.log(typeof hobbies);


//Tuplas

let endereco: [string,number] = [ "Av Principal", 99];

console.log(endereco);


// enums

enum Cor {
    Cinza,
    Azul,
    Preto
}
let minhaCor: Cor = Cor.Azul
console.log(minhaCor.toString);

// any

let carro : any = 'Ferrari'
console.log(carro);

carro = { marca: 'Ferrari', ano: 2020}
console.log(carro);

// Funcoes

function retornaMeunome(): string{
    return nome
}
console.log(retornaMeunome);

function digaOi(): void{
    console.log('oi');
    }
    digaOi();

    function multiplicar(numA: number, numB: number): number{
        return numA*numB
    }
    console.log(multiplicar(5,9));
    
// tipo função -> declara uma variavel que vai receber uma funcao de tipo especifico

let calculo: (numeroA: number, numeroB: number) => number;

calculo = multiplicar;
console.log(calculo(6,5));

// objetos

let usuario :{nome: string, idade:number} = {
    nome: 'Jean',
    idade: 25
}
usuario = {
    nome: 'Maria',
    idade: 24
}

console.log(usuario);


// Union Types
let nota = 10
console.log(`Minha nota é ${nota}`);

// never -> nunca vai retorna, loop infinito ou termina com erro

function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'JE',
    preco: -1,
    validarProduto(){
        if(this.nome.trim.length == 0){
            falha('Precisa do nome')
        }
        if(this.preco <= 0){
            falha('Preco invaliod')
        }
    }
}
produto.validarProduto()

