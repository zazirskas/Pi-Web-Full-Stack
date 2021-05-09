const visualizacao = document.getElementById('visualizacao');

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


const aplicaDesconto = porcentagemDesconto => numero => numero - (numero * (porcentagemDesconto / 100));

const produtosComDesconto = produtos.map((produto) => (
  {
    ...produto,
    precoDesconto10 :  aplicaDesconto(10)(produto.preco),
    precoDesconto20 :  aplicaDesconto(20)(produto.preco),
    precoDesconto30 :  aplicaDesconto(30)(produto.preco),
    precoDesconto40 :  aplicaDesconto(40)(produto.preco),
    precoDesconto50 :  aplicaDesconto(50)(produto.preco),
    precoDesconto60 :  aplicaDesconto(60)(produto.preco),
    precoDesconto70 :  aplicaDesconto(70)(produto.preco),
    precoDesconto80 :  aplicaDesconto(80)(produto.preco),
    precoDesconto90 :  aplicaDesconto(90)(produto.preco),
    precoDesconto100 : aplicaDesconto(100)(produto.preco),
  }
));

console.log(produtosComDesconto);

let acc;

for (produto of produtosComDesconto) {
  acc += `<p>
  Produto: ${produto.id}<br>
  Nome: ${produto.nome}<br>
  Preco Original: ${produto.preco}<br>
  <h4>Preço com desconto 10%: ${produto.precoDesconto10}</h4> 
  <h4>Preço com desconto 20%: ${produto.precoDesconto20}</h4>
  <h4>Preço com desconto 30%: ${produto.precoDesconto30}</h4>
  <h4>Preço com desconto 40%: ${produto.precoDesconto40}</h4>
  <h4>Preço com desconto 50%: ${produto.precoDesconto50}</h4>
  <h4>Preço com desconto 60%: ${produto.precoDesconto60}</h4>
  <h4>Preço com desconto 70%: ${produto.precoDesconto70}</h4>
  <h4>Preço com desconto 80%: ${produto.precoDesconto80}</h4>
  <h4>Preço com desconto 90%: ${produto.precoDesconto90}</h4>
  <h4>Preço com desconto 100%: ${produto.precoDesconto100}</h4></p>`
};

visualizacao.innerHTML = acc;