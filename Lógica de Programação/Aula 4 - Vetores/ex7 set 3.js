const produtos = [
  {
      nome: 'pipoca',
      quantidade: 1
  },
  {
      nome: 'sal',
      quantidade: 2
  },
  {
      nome: 'pimenta',
      quantidade: 1
  }
];

let itemEncontrado, buscaItem;

buscaItem = prompt('Insira o item desejado: ');


itemEncontrado = produtos.findIndex((produto) => produto.nome === buscaItem);

if (itemEncontrado !== -1) console.log(`O ${buscaItem} foi encontrado!`);
else console.log("Item não encontrado");



