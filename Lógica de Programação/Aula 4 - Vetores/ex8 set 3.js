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
      nome: 'pipoca',
      quantidade: 1
  },
  {
      nome: 'pimenta',
      quantidade: 1
  }
 ];

let itemEncontrado, buscaItem;

buscaItem = prompt('Insira o item desejado: ');


itemEncontrado = produtos.filter((produto) => produto.nome === buscaItem);

console.log(itemEncontrado);



