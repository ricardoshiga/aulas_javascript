/* Array
   Relação de dados indexados.
   Também conhecidos como Vetores ou Matrizes. 
   
   
   Finalidade deste recurso é ermazenar uma série de dados
   num mesmo espaço de memória. */


//    Ememplos:
let alunos = ["Rafael", "Tiago", "Kaiky"];


/* Acessando o dado pelo índice */
console.log(alunos[1]);   /* Tiago */
console.log(alunos[0]);   /* Rafael */
console.log(alunos[2]);   /* Kaiky */


let comidas = ["lazanha","pizza" , "hamburguer", "panetone", "pamonha."];

console.log(`Adoro ${comidas[2]} mas, também gosto de ${comidas[4]}`) 


console.log(".............................")

// Matriz de 2 dimensões
let tecnologias = [
    ["HTML", "CSS", "JS"],
    ["PHP", "Node", "Java", "SQL"],
    ["Figma", "Photoshop"]
];

console.log(tecnologias);

console.log(tecnologias[0][2]); /* JS */
console.log(tecnologias[1][1]) /* Node */
console.log(tecnologias[2][1]) /* Node */
