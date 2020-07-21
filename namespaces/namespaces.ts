namespace Geometria{
    export namespace Area{
        const Pi = 3.14
    
       export function circunferencia(raio: number){
            return Pi * Math.pow(raio,2)
        }
        
        export function retangulo(base:number, altura: number): number{
            return base * altura
        }
        
    }
}


console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10,20));

