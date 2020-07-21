function echo(objeto: any){
    return objeto
}
console.log(echo('Jean'));
// nao acusa o erro
console.log(echo(23).length);


 // Usando Generics

 function echoMelhorado<T>(objeto: T):T{
     return objeto
 }
 console.log(echoMelhorado('Jean').length);
 console.log(echoMelhorado(23));

 // Generics disponiveis na API

 const avaliacoes: Array<number> = [ 10,40,7.7]
 avaliacoes.push(8,5)
 console.log(avaliacoes);
 