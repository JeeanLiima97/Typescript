interface Humano{
    nome: string
    // opcional
    idade?: number
    //propriedade nao definida 
    [prop: string]: any
}


function saudarcomOla(pessoa: Humano){
    console.log('Ola, ' + pessoa.nome);
    
}

const pessoa: Humano ={
    nome: 'Jean',
    idade: 22
}

saudarcomOla(pessoa)

// Usando classes

class Cliente implements Humano{
    nome: string = 'Jean'
}


// interface funçao

interface Funcaocalculo{
    (a: number, b:number): number
}

let potencia : Funcaocalculo

potencia = function(base: number, exp: number):number{
    return Math.pow(base, exp)
}

console.log(potencia(2,3));


// herença

interface A{
    a(): void
}

interface B{
b(): void
}

interface ABC extends A,B {
    c(): void
}

class RealABC implements ABC {
    a(): void{}
    b(): void{}
    c(): void{}
}