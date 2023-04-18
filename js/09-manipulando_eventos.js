// Exemplo 1
const exemplo1 = document.querySelector("span");

/* Ouvinte/Monitor de Evento 
addEventListener
("tipo de evento", função com as ações)*/
exemplo1.addEventListener("click", function(){
    exemplo1.textContent = "Beleza!";
    exemplo1.style.fontFamily = "Verdana";
    exemplo1.style.textTransform = "uppercase";
    exemplo1.style.color = "blue";
    exemplo1.style.backgroundColor = "yellow";

    
});

exemplo1.addEventListener ("mouseout", function(){
    exemplo1.textContent = "Exemplo 01";
    exemplo1.style.all = "unset";

    if(pagina.classList.contains("modo-noturno")) {
       exemplo1.style.color = "white";
}   else {
    exemplo1.style.color = "black";
}


    exemplo1.style.fontFamily = "Times New Roman";
    exemplo1.style.textTransform = "normal";
    exemplo1.style.color = "black"
    
} );

// Exemplo 2: Modo noturno

// Etapa 1: selecionar o objeto/elemento que será modificado
const pagina = document.querySelector("body");

// Etapa 2: selecionar o objeto/elemento que será o responsável por ativar/desativar a classe
const botao = document.querySelector("#noturno");

// Etapa 3: programação do evento de click no botão
botao.addEventListener("click", function(){
    alert("clicou");


// Etapa 4: alternar (ativar/desativar) a classe na pagina
pagina.classList.toggle("modo-noturno");

// Etapa 5: condicional para mudar o texto do botão
if(botao.textContent == "Ativar")
{
    botao.textContent = "Desativar";

}   else {
    botao.textContent = "Ativar";
}

});

// Exemplo 3: simulação de cadastro 

/*  Captura de dados de formulário, 
    cálculos de valores, 
    verificação condicional, 
    ceiação de HTML via JS, 
    adição de conteúdo/resultados na página (DOM) 
*/

/* Etapa 1:
Acessar e selecionar os elementos que serão usados*/
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados")
/*  Etapa 2:
Monitorar o evento de acionamento de formulário,
ou seja, detectar quando o usuário clica no botão de formulário ou pressiona ENTER. */
formulario.addEventListener("submit", function(event){
    /* Usamos o comando abaixo par aanular o comportamento padrão do navegador de tentar dazer um redirecionamento de página para acionar o formulário. Isso é importante para as ações programadas na função  possam ser initerpretadas. */
    event.preventDefault()
    
/* Etapa 3:
 Capturar os valores digitados DENTRO de cada campo*/
 let nome = campoNome.value;   
 let nota1 = campoNota1.value;   
 let nota2 = campoNota2.value;   

 /* Exercícios */

 const media = (nota1 + nota2) / 2;

 const mediaMinima = 7;
 let resultado; 
if (media >= mediaMinima) {
    resultado = "Aprovado";
} else {
    resultado = "Reprovado";
}

console.log((`O Aluno ${nome} de notas ${nota1} e ${nota2} e foi ${resultado}`));

/* Programação para colocar os resultados no HTML */
// 1) Criar o elemento/tag que será colocado no HTML
let paragrafo = document.createElement("p")

// 2) Montar o conteúdo da nova tag
paragrafo.innerHTML = `${nome} - ${media} - ${resultado}`;

// 3) Adicionar ao HTML de destino (injetar no DOM)
divResultados.appendChild(paragrafo);

// Limpar campos
formulario.reset();

// Devolver o foco (cursor) para o campo nome
campoNome.focus ();

});


