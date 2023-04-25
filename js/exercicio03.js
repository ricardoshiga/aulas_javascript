const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector("#resultado")

let numeroAleatorio = parseInt(Math.random() * 11);
console.log(numeroAleatorio);

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let palpiteDigitado = parseInt(campoPalpite.value);
    console.log(`Palpite : ${palpiteDigitado}`);

    /* Se o palpite digitado pelo usuário for igual ao numero aleatório que o jogo gerou... */
    if(palpiteDigitado == numeroAleatorio){
        // Então, acertou!
        resultado.innerHTML = "Acertou!😀";
        resultado.style.color = "blue";

 /* Senão, se palpite digitado for meno qeu zero ou maior que 10 */
} else if ( palpiteDigitado < 0 || palpiteDigitado > 10 ){
// Então, informar que os valores precisam ser entre ) e 10
resultado.innerHTML = "Digitar um valor entre 0 e 10🤭";
resultado.style.color = "orange";
}

    else {
        // Senão, errou!
        resultado.innerHTML = "Errou!😭"
        resultado.style.color = "red"
    }
});


