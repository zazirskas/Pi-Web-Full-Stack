let Produtos = [];

const adicionaItem = (item) => {
	if (!item) {
		alert("Item inválido, insira um item!");
	} else {
		Produtos.push(item);
		console.log(Produtos);
	}
	atualizaLista();
}

const ordenaLista = () => {
	Produtos = Produtos.sort();
	atualizaLista();
}

const limparLista = () => {
	Produtos.splice(0);
	atualizaLista();
}

const atualizaLista = (produtosEncontrados) => {
	const listaCompras = document.getElementById("listaCompras");
	let listaLi = "";
	const listaProdutos = produtosEncontrados ? produtosEncontrados : Produtos;
	for (item of listaProdutos) {
		listaLi += `<li>${item}</li>`;
	}

	listaCompras.innerHTML = listaLi;
}

const buscaProduto = (produtoBuscado) => {
	const produtoUppercase = produtoBuscado.toUpperCase();
	const produtosEncontrados = Produtos.filter((produto) => produto.toUpperCase().search(produtoUppercase) > -1);
	console.log(produtosEncontrados)
	atualizaLista(produtosEncontrados);
}

const resetBusca = () => {
	atualizaLista();
}

const deletaItem = (item) => {
	const removeIndex = Produtos.findIndex((Produto) => Produto === item);
	Produtos.splice(removeIndex, 1);
	atualizaLista();
}