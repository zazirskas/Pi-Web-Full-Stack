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

let solicitaProduto, buscaProduto;

solicitaProduto = prompt('Insira o nome do produto desejado para remover da lista: ');

buscaProduto = produtos.filter((produto) => produto.nome === solicitaProduto);

console.log(buscaProduto);