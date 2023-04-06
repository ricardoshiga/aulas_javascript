/* Objeto
Estrutura de dados não-indexados baseada em pares compostos por uma chave e um valor. Esses pares são conhecidos como Propriedades ou Atributos. */

// Exemplo 1: objetos simples
let livro = {
    // Chave / Valor
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3,
    autor: "J.R.R. Tolkien"
};

console.log(livro.titulo);
console.log(livro.ano);
console.log(livro.autor);

console.log(".....................")

// Exemplo 2: objeto com array e outro objeto
let pessoa = {
    nome: "Ricardo Shiga",
    idade: 49,
    telefones: ["11-96854-3396", "11-4488-4488"],
    endereco: {
        logradouro: "Rua Nair Doná",
        numero: "2113",
        bairro: "Penha",
        Cidade: "Gru"
    }


};


console.log(pessoa.nome);
console.log(pessoa.telefones[0]);
console.log(pessoa.endereco.bairro);

console.log("..............................")


// Exemplo 3: Array de objetos
let livros = [
    {
        titulo: "Inside Out",
        autor: "Nick Jason",
        ano: 2012
    },
    {
        titulo: "O Esperado",
        autor: "João Pedro",
        ano: 1967
    },
    {
        titulo: "Games of Thrones",
        autor: "Zé da Padaria",
        ano: 1989
    }
];
 console.log(livros[1].titulo);
 console.log(livros[0].autor);

console.log("..................................")

/* Criar objeto chamado PEDIDO, contendo as seguintes informações:

- Código (invente uma combinação de letras e números)
- Lista de 3 produtos (basta o nome de cada um)
- Data do pedido (data de hoje)
- Preço
- Prazo de entrega em dias

2) Mostre no console uma frase contendo algumas das infomrações do pedido. 
   Exemplo: "Referente ao pedido 123xyz, os produtos foram comprados em 06/04/2023 custando 4500; O prazo de entrega é de 7 dias úteis." */

   let pedido = {
            codigo: "ri1974",
            produtos: [ "feijão", "arroz", "alho"],
            data: "06/05/2023",
            preco: 740,
            prazo: "7"
        
   
}   
   let configuracoes = {
    style: "currency",
    currency: "BRL"
   }

   console.log(`Referente ao pedido ${pedido.codigo} os produtos foram comprados em ${pedido.data}, custando ${pedido.preco.toLocaleString("pt-br", configuracoes)}, com prazo de entrega de ${pedido.prazo} dias úteis.`);
