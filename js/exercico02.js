/* function converteMoeda (valor1, valor2) {
    let total = valor1 * valor2;
    return total;
}
     let resultado = converteMoeda(1000, 4.94)
    console.log(resultado); */

    let valorEmDolares = 1000;

    function converteMoeda(valor){
        return valor * 4.94;
    }

    let valorConvertido =  converteMoeda (valorEmDolares);

    console.log(
        `Valor em dólares: ${valorEmDolares}`
    );

    console.log(
    `Valor em reais (convertido) ${valorConvertido}`
    );
