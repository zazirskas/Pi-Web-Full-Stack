const lista = document.getElementById('lista');

const produtos = [
	{
		id: 1,
		nome: "Galaxy S21",
		preco: 5000,
	},
	{
		id: 2,
		nome: "Galaxy A51",
		preco: 1500,
	},
	{
		id: 3,
		nome: "Iphone 12",
		preco: 12000,
	},
];

const porcentagemDesconto = parseFloat(prompt("Insira o % de desconto"));

const calculaDesconto = (desconto, preco) => {
  return preco - (preco * (desconto / 100));
}

const produtosComDesconto = produtos.map((produto) => (
  {
    ...produto,
    desconto: porcentagemDesconto,
    preçoComDesconto: calculaDesconto(porcentagemDesconto, produto.preco)
  }
));

const atualizaLista = () => {
  let item = ''
  for (produto of produtosComDesconto) {
    item += `<br><li>Nome do produto: ${produto.nome} <br>Preço atual: ${produto.preco} <br> Preço com desconto: ${produto.preçoComDesconto}</li>`;
  }
  lista.innerHTML = item;
}

atualizaLista();


