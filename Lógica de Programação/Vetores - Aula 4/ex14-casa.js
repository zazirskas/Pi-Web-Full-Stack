const produtos = [
	{
		nome: "Arroz",
		quantidade: 1,
	},
	{
		nome: "Feijão",
		quantidade: 1,
	},
	{
		nome: "Açúcar",
		quantidade: 1,
	},
	{
		nome: "Milho",
		quantidade: 1,
	},
	{
		nome: "Arroz",
		quantidade: 1,
	},
	{
		nome: "Milho",
		quantidade: 1,
	},
	{
		nome: "Feijão",
		quantidade: 1,
	},
	{
		nome: "Açúcar",
		quantidade: 1,
	},
];

let solicitaProduto, buscaProduto, tamanhoLista, cont;

solicitaProduto = prompt('Insira o nome do produto desejado para remover da lista: ');

tamanhoLista = produtos.filter((produto) => produto.nome === solicitaProduto);

tamanhoLista = tamanhoLista.length;

cont = 0

while (cont != tamanhoLista) {
  buscaProduto = produtos.findIndex((produto) => produto.nome === solicitaProduto);
  produtos.splice(buscaProduto, 1);
  cont++;
}

console.log(produtos);