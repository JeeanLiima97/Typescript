// Desafio
/*
    Criar um objeto funcionario com:
        -Array de strings com os nomes dos supervisores
        - Funcao de bater ponto que recebe a hora (numero) e retorna uma string
        -> Ponto normal (<=8)
        -> Fora do horário (>8)
*/
var funcionario = {
    supervisores: ["Jean", "Juliana"],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return "Fora do horário";
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(10));
// criando outro funcionario
var funcionario1 = {
    supervisores: ["Jean", "Jose"],
    baterPonto: function (hora) {
        return "Teste";
    }
};
