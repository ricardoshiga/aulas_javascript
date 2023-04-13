/* Exemplo 1*/
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

    exemplo1.style.fontFamily = "Times New Roman";
    exemplo1.style.textTransform = "normal";
    exemplo1.style.color = "black"
    
} );

/* Exemplo 2: Modo noturno */

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