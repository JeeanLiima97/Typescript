class Data{
    // publico por padrão 

     dia: number
     mes: number
    ano: number

    constructor(dia: number = 1,mes: number = 1 ,ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3,10,1999)
console.log(aniversario);

const casamento = new Data //posso omitor os "()"
casamento.ano = 2017
console.log(casamento);

///--------------------------------------------------------------------------------------------///


class DataEsperta{
    constructor(public dia: number = 1, public mes: number = 1 ,public ano: number = 1970){
       
    }
}

const aniversarioEsperto = new DataEsperta
(3,10,1999)
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta
 //posso omitor os "()"
casamento.ano = 2017
console.log(casamentoEsperto);


// Desafio classe produto

class Produto{

    constructor(public nome: string, public preco: number, public desconto: number = 0){

    }
   public resumo(): string{
       return `${this.nome} custa R$${this.preco}`
   }

}

const p1 = new Produto("Celular", 150)
const p2 = new Produto('Notebook', 1230)
const p3 = new Produto('Tv', 1000, 0.1)
console.log(p1.resumo());



// Getters & Setters
class Pessoa{
    private _idade: number = 0

    get idade():number{
        return this._idade
    }

    set idade(valor: number){
        if(valor>= 0 && valor <= 100){
            this._idade = valor
        }
    }
}

const pe1 = new Pessoa
pe1.idade = 10
console.log(pe1);

