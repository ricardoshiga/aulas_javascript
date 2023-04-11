/* Loops (ou estruturas/laços de repetição

Tradicionais: white, do/while, for
Específicos: for/of, for/in) 
*/

// Exemplo 1: while (enquanto)
// Este loop SOMENTE funcionará se a condição dor verdadeira
// Variável de controle de repetição
// let contador = 1;

// while(contador <= 4) {
//     console.log(`valor de contador: ${contador}`);
//     contador++; //incremento

//     // contador = contador + 1;
// }



// Exemplo 2: do/while (faça/enquanto)
// Este loop funcionará SEMPRE no mínimo uma vez, não importando a condição
// let contador = 10;
// do {
//     console.log(`Contador vale ${contador}`);
//     contador++
// }   while(contador <= 5); 

// Exemplo 3: fo (para)
// i, j, k (nomes comuns para variáveis de controle)
 

// for(variavel de AbortController; condução; atualização) {
// for(let i = 1; i <= 5; i++ ) {
//     console.log(`Valor de i: ${i}`);

// }

// Exemplo 4: loop com array
const alunos = [
    "Daniel", "Rafael", "Ricardo", "Camila", "Waleska", "Tiago", "Vinicius", "Ross", "Rachel"
];

// Guardando tamanho/comprimento do array
let quantidade = alunos.length

for( let i = 0; i < quantidade; i++){
    console.log(`Nome: ${alunos[i]}`);

}

