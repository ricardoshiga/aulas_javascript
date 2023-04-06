/* 
Comandos condicionais:
if (SE) / 
else (SENÃO) /
else if (SENÃO SE) /
Switch (ESCOLHA/ANALISE)/
Case (CASO)

Operadores relacionais:
> (MAIOR QUE)
< (MENOS QUE)
>= (MAIOR OU IGUAL)
<= (MENOR OU IGUAL)
== (IGUALDADE)
!= (DIFERENTE) */

// Exemplos
const aluno = "Ricardo";
let nota1 = 10;
let nota2 = 9;
let faltas = 7;
let media = (nota1 + nota2) / 2;

console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} ${nota2}`);
console.log(`Media: ${media}`);
console.log(`Faltas: ${faltas}`);

// Critério de aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

/* ALGORITMO Se a média obtida pelo aluno for maior ou igual à média da escola (e se suas faltas forem abaixo do limite), ele estará aprovado. Caso contrário, ele estará reprovado.*/

/* Condicional Composta */
if (media >= mediaMinima && faltas < limiteDeFaltas) {
    console.log("aprovado");
} else {
    console.log("reprovado");
}

/* Condicinal Encadeada */

/* Algoritmo para análise de desempenho
Média menor que 3? PÉSSIMO
Média menor que 5? RUIM
Média menor que 7? REGULAR
Média menor que 9? BOM
Nenhuma das anteriores? ÓTIMO */


let desempenho;

if (media < 3) {
    desempenho = "PÉSSIMO";
} else if (media < 5) {
    desempenho = "RUIM";
} else if (media < 7) {
    desempenho = "REGULAR";
} else if (media < 9) {
    desempenho = "BOM";
} else {
    desempenho = "ÓTIMO";
}

console.log(desempenho);

console.log("..................................");

/* if/else de uma linha (shorthand if/else) */
let idade = 20;

// Versão "normal" 
// let resultado;
// if (idade >= 18 ){
//     resultado = "maior"
// }  else {
//     resuldado = "menor;"
// }

// Versão abreviada
let resultado = idade >= 18 ? "maior" : "menor"
                           /* ?: ---> Operador Ternário */
console.log(`A pessoa é ${resultado} de idade`);

console.log("....................");

/* Switch/Case/Break/Default */

/* Algoritmo de um chatbot
Opções:
1 -> Pedir informações
2 -> Abrir uma reclamação
3 -> Fazer elogio
x -> Falar com atendente */

let opcao = parseInt(prompt("Digite 1, 2 ou 3"));
let mensagem;

switch(opcao){
    case 1: mensagem = "Ok, o que quer saber?"; break;

    case 2: mensagem = "Poxa, que pena. O que houve?"; break;

    case 3: mensagem = "Bacana! Conte-me :)"; break;

    default: mensagem = "Não entendi... vou chamar alguém!";

}

console.log(`Opção escolhida: ${opcao}`);
console.log(mensagem);




