// Ex 1:

// console.log(VerificarFinalDaPalavra("estudo","123"))

// function VerificarFinalDaPalavra(palavra : string, final : string) : boolean{
//     return palavra.endsWith(final)
// }

// Ex 2:

// console.log(SubstituirCaractere("teste"))

// function SubstituirCaractere(palavra : string){
//     let arrayPalavra : string[] = palavra.split('')
//     let arrayFinal : string[] = []
//     arrayPalavra.forEach(x => {
//         if(arrayPalavra.filter(letra => letra == x).length > 1){
//             arrayFinal.push(")")   
//         }else{
//             arrayFinal.push("(")
//         }
//     })
//     console.log(arrayFinal)
//     return arrayFinal.join('')
// }

// Ex 3:

console.log(ContarDigito(11, "6"))

function ContarDigito(n : number, d : string) : number{
    let contador : number = 0
    let arrayQuadrado : number[] = []
    for(let index : number = 0; index <= n; index++){
        arrayQuadrado.push(index * index)
    }
    arrayQuadrado.forEach(x => {
        let numeroArray : string[] = x.toString().split('').filter(numero => x)
        numeroArray.forEach(y => {
            if(d == y){
                contador++
            }
        })
    })
    console.log(arrayQuadrado)
    return contador
}


