const produtos = [
  {
      id: 1,
      nome: 'Galaxy S51',
      preco: 1000
  },
  {
      id: 1,
      nome: 'Galaxy S51',
      preco: 1000
  },
  {
      id: 2,
      nome: 'Iphone',
      preco: 2000
  },
  {
      id: 2,
      nome: 'Iphone',
      preco: 2000
  }
];

const produtosQuant = produtos.reduce((acc, produto) => {
  const indexProduto = acc.findIndex((item) => item.nome === produto.nome);
  if (indexProduto === -1) {
    produto.quantidade = 1;
    acc.push(produto);
  };
  if (indexProduto > -1) {
    acc[indexProduto].quantidade++;
  };

  return acc;

}, []);

console.log(produtosQuant);