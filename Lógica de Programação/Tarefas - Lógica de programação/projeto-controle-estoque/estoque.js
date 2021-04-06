const produtos = [];

const visualizacaoProdutos = document.getElementById("visualizacaoProdutos");
const descricaoProduto = document.getElementById("descricaoProduto");
const quantidadeProduto = document.getElementById("quantidadeProduto");
const linkImagemProduto = document.getElementById("linkImagemProduto");
const categoriaProduto = document.getElementById("categoriaProduto");
const quantidade = document.getElementById("quantidadeEstoque");
const inputBusca = document.getElementById("inputBusca");
const filtro = document.getElementById("filtro");
const cadastrar = document.getElementById('cadastrar');
const formAcoes = document.getElementById('form-acoes');

inputBusca.addEventListener("keyup", (event) => {
	const valor = event.target.value;
	const listaBusca =
		filtro.value === "id"
			? produtos.filter((produto) => produto.id === parseInt(valor))
			: produtos.filter(
					(produto) =>
						produto.descrição.toUpperCase().search(valor.toUpperCase()) > -1
			  );
	atualizaListaProdutos(listaBusca);
});

let proximoId = 0;

const adicionaProduto = (descrição, quantidade, categoria, linkImagem) => {
	const produto = {
		id: geraId(),
		descrição,
		quantidade: parseInt(quantidade),
		categoria,
		linkImagem,
	};

	produtos.push(produto);

	atualizaListaProdutos();
	limparCampos();
};

const atualizaListaProdutos = (listaBusca) => {
	let listaProdutos = "";
	let lista = listaBusca ? listaBusca : produtos;
	for (produto of lista) {
		listaProdutos += `<div class="card">
      <img width="250px" height="250px"
          src="${produto.linkImagem}">
      <div class="descricao-card" onclick="editaProduto(${produto.id})">
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
	let quantidadeEstoque = produtos.length;

	visualizacaoProdutos.innerHTML = listaProdutos;
	visualizacaoProdutos.style.flexDirection = "row";
	quantidade.innerText = `Quantidade de produtos no estoque: ${quantidadeEstoque}`;
};

// const geraIdRandom = () => {
// 	const min = 1;
// 	const max = 1000000;

// 	return Math.floor(Math.random() * (max - min) + min);
// };

const geraId = () => {
	proximoId++;
	return proximoId;
};

const removeProduto = (id) => {
	const indiceProduto = produtos.findIndex((item) => item.id === parseInt(id));
	produtos.splice(indiceProduto, 1);
	atualizaListaProdutos();
};

const limparCampos = () => {
	visualizacaoProdutos.value = "";
	descricaoProduto.value = "";
	quantidadeProduto.value = "";
	linkImagemProduto.value = "";
	categoriaProduto.value = "";
};

let contarClique = 0;

const listarProdutos = () => {
	let listar = "";
	if (contarClique % 2 === 0) {
		for (produto of produtos) {
			listar += `<li>${produto.descrição}</li>`;
		}

		visualizacaoProdutos.innerHTML = listar;
		visualizacaoProdutos.style.display = "flex";
		visualizacaoProdutos.style.flexDirection = "column";
	} else {
		atualizaListaProdutos();
	}
	contarClique++;
};

const editaProduto = (id) => {
  const produtoAEditar = produtos.find((produto) => produto.id === id);
  descricaoProduto.value = produtoAEditar.descrição;
  quantidadeProduto.value = produtoAEditar.quantidade;
  categoriaProduto.value = produtoAEditar.categoria;
  linkImagemProduto.value = produtoAEditar.linkImagem;
  
  cadastrar.onclick = (aplicarAlteracoes) => aplicarEdicao(id, descricaoProduto.value, quantidadeProduto.value, categoriaProduto.value, linkImagemProduto.value);
  
  cadastrar.innerText = 'Alterar'

};

const aplicarEdicao = (id, novoDescricao, novoQuantidade, novoCategoria, novoLinkImage) => {
  const produtoAEditar = produtos.find((produto) => produto.id === id);
  produtoAEditar.descrição = novoDescricao;
  produtoAEditar.quantidade = novoQuantidade;
  produtoAEditar.categoria = novoCategoria;
  produtoAEditar.linkImagem = novoLinkImage;
  
  limparCampos();

  cadastrar.innerText = 'Cadastrar';

  atualizaListaProdutos();

  cadastrar.onclick = (cadastrarNovoProduto) => adicionarPadrao();
}

const adicionarPadrao = () => {
  return adicionaProduto(descricaoProduto.value, quantidadeProduto.value, categoriaProduto.value, linkImagemProduto.value);
};