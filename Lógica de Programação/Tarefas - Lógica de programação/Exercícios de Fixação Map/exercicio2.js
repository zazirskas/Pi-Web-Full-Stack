const lista = document.getElementById('lista');
const btnBusca = document.getElementById('busca');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');

const produtos = [
  {
      id: 1,
      nome: 'Galaxy S21',
      preco: 5000
  },
  {
      id: 2,
      nome: 'Galaxy A51',
      preco: 1500
  },
  {
      id: 3,
      nome: 'Iphone 12',
      preco: 12000
  },
  {
      id: 4,
      nome: 'Iphone 6',
      preco: 3000
  },
  {
      id: 5,
      nome: 'Iphone 7',
      preco: 3500
  }
];

const buscaPorPreco = (precoMinimo, precoMaximo) => {
  return (produto) => produto.preco >= precoMinimo && produto.preco <= precoMaximo
}

const busca = (precoMinimo, precoMaximo) => {
  const listaBusca = produtos.filter(buscaPorPreco(precoMinimo, precoMaximo));
  atualizaLista(listaBusca);
}

const atualizaLista = (listaBusca) => {
  let item = ''
  for (produto of listaBusca) {
    item += `<li>Nome: ${produto.nome} Preço: ${produto.preco}</li>`
  }
  lista.innerHTML = item;
}

btnBusca.onclick = () => busca(minimo.nodeValue, maximo.value);