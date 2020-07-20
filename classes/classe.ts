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
