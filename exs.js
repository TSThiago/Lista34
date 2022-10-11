// Ex 1:
// console.log(VerificarFinalDaPalavra("estudo","123"))
// function VerificarFinalDaPalavra(palavra : string, final : string) : boolean{
//     return palavra.endsWith(final)
// }
// Ex 2:
console.log(SubstituirCaractere("teste"));
function SubstituirCaractere(palavra) {
    var novaPalavra = palavra.match(/\w/gi);
    console.log(novaPalavra);
    var arrayPalavra = palavra.split('');
    var arrayFinal = [];
    arrayPalavra.forEach(function (x) {
        if (arrayPalavra.filter(function (letra) { return letra == x; }).length > 1) {
            arrayFinal.push(")");
        }
        else {
            arrayFinal.push("(");
        }
    });
    console.log(arrayFinal);
    return arrayFinal.join('');
}
