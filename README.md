1. Faça uma função que receba um parâmetro string e um segundo como string
também, a função deve retornar true caso o primeiro termine como o segundo.
Ex.:
Entrada - Saída
Funcao(estudo, udo) - true
Funcao(estudo, abc) - false

2. Faça uma função que receba uma string como parâmetro, e deve converter para
uma nova string onde cada caractere deve ser substituído por “(“ se aparece
apenas uma vez na string original ou por “)” se aparecer mais de uma vez. A função
não deve diferenciar maiúsculas e minúsculas para fazer a contagem.
Ex.:
Entrada - Saída
“teste” - “))())”
“tech” - “((((”
“Aula” - “)(()”

3. Faça uma função que recebe dois parâmetros: um número inteiro positivo ”n” e um
dígito “d” entre 0 e 9. A função deve calcular o quadrado de todos os números entre
0 e “n”, e depois contar quantas vezes o dígito “d” aparece nos resultados das
contas anteriores e por fim retorne esse valor. (para calcular o quadrado basta
multiplicar um número vezes ele mesmo => k*k)
Ex.:
Entrada - Saída
10, 1 - 4 (0,1,4,9,16,25,36,49,64,81,100)
11,6 - 3 (0,1,4,9,16,25,36,49,64,81,100,121