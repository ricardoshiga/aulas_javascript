/* Funções já usadas
   log()
   prompt()
   alert()
   toLocateString()
   parseInt()
   */


/* Funções personalizadas
- Organização de lógica, com separação de responsabilidades
- Reaproveitamento de código
*/   

/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */
/*Sintaxe 1 (tradicional)
Função anônima/literal */
const exemplo1 = function() {
    //corpo da função (ações)
    console.log(("Função anônima"));
};

/* Obs: para uma função fazer o que ela foi programada para fazer, em algum momento ela presica ser chamada/invocada */

// Chamada de função
exemplo1();
/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

/* Sintaxe 2 (tradicional) 
Função nomeada/declarada*/
function exemplo2(){
    // corpo da função (ações)
    console.log("Função nomeada!");
}

exemplo2();
/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

/* Sintaxe 3: (moderno/atual):
Arrow Function (função "flexa/seta") */

/* Obs: exssa é a sintaxe usada nos frameworks JS mais populares: React, Angular, Vue, React Native  */

const exemplo3 = () => {
    console.log("Arrow Function");
}

exemplo3();

console.log("........................................................");

/* Funções com parâmetros/argumentos 
   Parâmetros 9ou argumentos) são dados passados para a função "entender" o que ela deve processar/fazer.
   
   Exemplo: uma função que calcule um frete precisa pelo menos de um
   parâmentro com o CEP do local de entrega.*/

   function login(usuario, senha){
        /* Base de dados fictícia com usuário ricardoshiga e senha 2015abc
        */

        if(usuario == "ricardoshiga" && senha == "2015abc") {
            console.log("Dados corretos, usuário entrou");
        } else {
            console.log("Dados incorretos, acesso bloqueado");
        }
        
        
   }

   login("ricardoshiga", "2015acb")

   console.log(".......................................................");

   function soma(valor1, valor2){
    // variável de escopo LOCAL
    let total = valor1 + valor2; 

    return total;
   }
   let resultado = soma(10, 500);
   console.log(resultado);
   

   console.log("...........................................");

//    Versão 1: sintaxe tradicional
// function dobro(valor){

//     return valor * 2;
// }

// Versão 2: sintaxe Arrow Function com return explícito
// const dobra = (valor) => {
//     return valor * 2
// };

// Versão 3: sintaxe Arrow Function com return implícito
/*  Obs.: quanto a arrow function possui somente UM parâmetro, você pode omitir os parênteses. 
E se a arrow function faz apenas uma única operação/retorno, vc tbm pode omitir as chaves e a palavra "return". 
Na prática vc pode criar uma função de uma única linha comarrow function. */
const dobra = ;

let exemploDobra = dobra(10);
console.log(exemploDobra);
