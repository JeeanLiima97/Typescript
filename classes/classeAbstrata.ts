// classe criada pra ser herdada
abstract class Calculo{

    protected resultado: number =0
    abstract executar (...numberos: number[]): void

    getResultado():number{
        return this.resultado
    }
}

class Soma extends Calculo{
    executar (...numeros: number[]): void{
this.resultado = numeros.reduce((t,a) => t+a)  
  }
 
}

let c1 = new Soma()
c1.executar(4,5,6,6)
console.log(c1.getResultado());
