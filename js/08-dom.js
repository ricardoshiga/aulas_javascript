/* Métodos/Funções de acesso/seleção de DOM 


- getElementById("identificador")
Permite acessar/selecionar UM elemento no DOM desde que ele esteja com um atributo "id".

- querySelector("seletor qualquer")
  Permite acessar/selecionar UM elemento no DOM através de um seletor CSS.




- querySelectorAll("seletor/res qualquer")
  Permite acessar/selecionar UM ou MAIS elementos no DOM através de um  ou mais seletores CSS.
*/


/* Exemplo 1: getElementByid() */
const titulo = document.getElementById("exemplo1");
console.log(titulo);

// Modificar o conteúdo dinamicamente
titulo.textContent = "Brincando com JS!";

// *** "Injetando" CSS inline ***
titulo.style.color = "blue";
titulo.style.textAlign = "center";
titulo.style.backgroundColor = "grey";


/* Exemplo 2: querySelector */
const exemplo2 = document.querySelector("h2");
console.log(exemplo2);   

// Adicionando classe CSS via JS
exemplo2.classList.add("destaque-item");


/* Exemplo 3: querySelectorAll */

const links = document.querySelectorAll("li a");
console.log(links);

console.log(links[2]);

/* Naprática, o resultado do querySelectorAll SEMPRE será um ARRAY (ou NodeList) */

/* Aplicando o atributo target= "_blank" aos links selecionados*/
for(let link of links){ 
    link.setAttribute("target", "_blanket");

}
