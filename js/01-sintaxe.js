      // Variáveis e Constantes

        /* let indica variável 
           const  indica constante  */
     
    // Criando variáveis
    // Nariável numérica não usa aspas
    let ano = 2023 
    let curso = "Programador Web"; 
    let cidade = "São Paulo";

    // Criando constantes 
    const nome = "Ricardo";    
    const escola = "Senac";

    // Saída de dados (no console)
    console.log("Exemplos")
    console.log(curso);
    console.log(ano);
    console.log(escola);

    let produto = "TV Led";
    let preco = 1499.715;
    let quantidade = 3;
    let total = preco * quantidade;

    console.log(produto);
    console.log(preco, quantidade);
    console.log(total);

    /* Função toFixed (número)
    Usada para determinar quantidade de casas decimais */
    console.log(total.toFixed (2));

    
    /* Saída de dados estaticos e dinâmicos */

    // Forma 1 (moderna) Tamplate String/Literal
    console.log(`Olá! ME chamo ${nome} e estou fazendo o curso de ${curso} no ${escola}`);



    // Forma 2 (antiga/tradicional) Concatenação
    console.log("Olá! Me chamo "+nome+" e estou fazendo o curso de " +curso+ " no " +escola);
