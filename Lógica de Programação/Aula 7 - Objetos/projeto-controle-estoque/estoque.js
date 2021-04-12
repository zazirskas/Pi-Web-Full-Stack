const produtos = [];

const visualizacaoProdutos = document.getElementById("visualizacaoProdutos");
const descricaoProduto = document.getElementById("descricaoProduto");
const quantidadeProduto = document.getElementById("quantidadeProduto");
const linkImagemProduto = document.getElementById("linkImagemProduto");
const categoriaProduto = document.getElementById("categoriaProduto");



const adicionaProduto = (descrição, quantidade, categoria, linkImagem) => {
	const produto = {
		id: geraIdRandom(),
		descrição,
		quantidade: parseInt(quantidade),
		categoria,
		linkImagem,
	};

	produtos.push(produto);

	atualizaListaProdutos();
  limparCampos();
};

const atualizaListaProdutos = () => {
	let listaProdutos = "";

	for (produto of produtos) {
		listaProdutos += `<div class="card">
      <img width="250px" height="250px"
          src="${produto.linkImagem}">
      <div class="descricao-card">
          <p><b>${produto.descrição}</b></p>
          <p>Quantidade em estoque: <b>${produto.quantidade}</b></p>
          <p>Categoria: <b>${produto.categoria}</b></p>
      </div>
      <div class="acoes">
      <span class="material-icons acao" onclick="removeProduto(${produto.id})">
      delete
      </span>
      </div>
    </div>`;
	}

	visualizacaoProdutos.innerHTML = listaProdutos;
};

const geraIdRandom = () => {
	const min = 1;
	const max = 1000000;

	return Math.floor(Math.random() * (max - min) + min);
};

const removeProduto = (id) => {
	const indiceProduto = produtos.findIndex((item) => item.id === parseInt(id));
	produtos.splice(indiceProduto, 1);
  atualizaListaProdutos();
};

const limparCampos = () => {
  visualizacaoProdutos.value = '';
  descricaoProduto.value = '';
  quantidadeProduto.value = '';
  linkImagemProduto.value = '';
  categoriaProduto.value = '';
}