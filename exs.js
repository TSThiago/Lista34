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
console.log(ContarDigito(11, "6"));
function ContarDigito(n, d) {
    var contador = 0;
    var arrayQuadrado = [];
    for (var index = 0; index <= n; index++) {
        arrayQuadrado.push(index * index);
    }
    arrayQuadrado.forEach(function (x) {
        var numeroArray = x.toString().split('').filter(function (numero) { return x; });
        numeroArray.forEach(function (y) {
            if (d == y) {
                contador++;
            }
        });
    });
    console.log(arrayQuadrado);
    return contador;
}
