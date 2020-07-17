// Desafio
/*
    Criar um objeto funcionario com:
        -Array de strings com os nomes dos supervisores
        - Funcao de bater ponto que recebe a hora (numero) e retorna uma string
        -> Ponto normal (<=8)
        -> Fora do horário (>8)
*/

//Criando um tipo funcionario
type Funcionario ={
    supervisores: string[],
    //recebe um numero e retorna uma string
     baterPonto:(horas:number)=> string }


let funcionario : Funcionario ={  
         supervisores: ["Jean", "Juliana"],
        baterPonto(horario: number): string{
            if(horario<=8){
                return 'Ponto normal'
            }else{
                return "Fora do horário"
            }

        }
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(10));

// criando outro funcionario

let funcionario1 : Funcionario ={
supervisores: ["Jean", "Jose"],
baterPonto(hora:number){
    return "Teste"
}
}