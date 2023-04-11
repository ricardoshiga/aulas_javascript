
// ENTRADA DE DADOS (entrada via prompt)
let nome = prompt("Qual seu nome?");

let idade = parseIntprompt("Qual sua idade?")

// LÓGICA DAS FAIXAS DE IDADE
// if (idade >= 18 && idade < 60) {
//     console.log(`${nome}, você é uma pessoa adulta`);
//     alert(`${nome}, você é uma pessoa adulta`)
// } else if (idade >= 60) {
//     console.log(`${nome}, você é uma pessoa idosa`);
//     alert(`${nome}, você é uma pessoa idosa`)
// } else {
//     console.log(`${nome}, você é uma pessoa menor de idade`);
//     alert(`${nome}, você é uma pessoa menor de idade`)
// }

// COM REFATORAÇÃO
let mensagem; 
if (idade >= 18 && idade < 60) {
    mensagem = "adulta";
    
} else if (idade >= 60) {
    mensagem = "idosa";
    
} else {
    mensagem = "menor de idade";
    
}

alert(`${nome}, você é uma pessoa ${mensagem}`);








