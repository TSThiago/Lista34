// Ex 1:

console.log(VerificarFinalDaPalavra("estudo","123"))

function VerificarFinalDaPalavra(palavra : string, final : string) : boolean{
    return palavra.endsWith(final)
}