// Ex 1:

// console.log(VerificarFinalDaPalavra("estudo","123"))

// function VerificarFinalDaPalavra(palavra : string, final : string) : boolean{
//     return palavra.endsWith(final)
// }

// Ex 2:

console.log(SubstituirCaractere("teste"))

function SubstituirCaractere(palavra : string){
    let arrayPalavra : string[] = palavra.split('')
    let arrayFinal : string[] = []
    arrayPalavra.forEach(x => {
        if(arrayPalavra.filter(letra => letra == x).length > 1){
            arrayFinal.push(")")   
        }else{
            arrayFinal.push("(")
        }
    })
    console.log(arrayFinal)
    return arrayFinal.join('')
}



