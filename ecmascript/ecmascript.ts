// let & const
//var = global dentro do contexto ou local dentro de uma função
// 
let seraQuePode ='?'
console.log(seraQuePode);

let estaFrio = true
if(estaFrio){
    let acao = 'Colocar o casaco'
    console.log(acao);
    
}
// const - imutavel --> escopo de bloco 
const cpf: string = '123.412.321-44'
//cpf = '321313122131'
console.log(cpf);

function relevar(){
    const segredo = 'interno'
    console.log(segredo);
    
}
//console.log(segredo);

//arrowfunction 

const soma = (n1:number, n2:number) => n1+n2
console.log(soma(5,5));

const falarCom = (pessoa:string) => console.log('Ola ' + pessoa);
falarCom('Jean')


//Parametro padrão

function contagemRegressiva(inicio:number = 3):void{
    console.log(inicio);
    while(inicio>0){
        inicio --
        console.log(inicio);
            }
            console.log("Fim");
            
    
}
contagemRegressiva()
contagemRegressiva(5)

// Rest e Spread
//... espalha os elementos do array
const numbers = [1,10,99,5]
console.log(Math.max(...numbers));


//juntando os elementos para criar um array
function retornaArray(...args: number[]): number[]{
    return args
}

const numeros = retornaArray(1,2,4,56,76)
console.log(numeros);

// Rest & Spread (Tupla)

const tupla: [number, string, boolean] = [1,'abc',false]

function tuplaParam1(a: number, b:string, c: boolean): void{
    console.log(`${a} ${b} ${c}`);
    
}
tuplaParam1(...tupla)

// Destructuring (Array)

const carecteristicas = ['Motor Zetec', 2020]
// const motor = carecteristicas[0]
// const ano = carecteristicas[1]

const [motor, ano] = carecteristicas
console.log(motor);
console.log(ano);

// Destructuring (Objeto)

const item = {
    nome: 'SSD 480gb',
    preco: 200
}

// const nomeItem = item.nome
// const preco = item.preco

const{nome: n, preco :p} = item
console.log(n);
console.log(p);

// Callback

function esperar3s(callback: (dado:string) => void){
    setTimeout(() => {
        callback('3s depois...')
        
    }, 3000);
}

esperar3s(function(resultado:string){
    console.log(resultado);
    
})

fetch('https://swapi.dev/api/people/1/ ')
.then(res => res.json())
.then(personagem => personagem.films)
.then(films => fetch(films[0]))
.then(resFilm => resFilm.json())
.then(filme => console.log(filme.title))

