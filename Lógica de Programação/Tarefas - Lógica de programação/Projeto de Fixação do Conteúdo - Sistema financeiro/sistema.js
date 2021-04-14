const gastos = [];

const descricao = document.getElementById("descricao");
const valor = document.getElementById("valor");
const tipo = document.getElementById("tipo");
const categoria = document.getElementById("categoria");
const visualizacao = document.getElementById("visualizacao");
const btnInsere = document.getElementById("insere");
const inputBusca = document.getElementById("busca");
const filtroBusca = document.getElementById("filtro");
const saldoTotal = document.getElementById('saldo-total');
const totalReceitas = document.getElementById('total-receitas');
const mediaReceita = document.getElementById('media-receitas');
const totalDespesas = document.getElementById('total-despesas');
const mediaDespesa = document.getElementById('media-despesas');

let proximoId = 1;

const buscaPorId = (id) => (produto) => produto.id === id;
const buscaPorDescricao = (descricao) => (produto) =>
  produto.descricao.toUpperCase().search(descricao.toUpperCase()) > -1;
const buscaPorTipo = (tipo) => (produto) =>
  produto.tipo.toUpperCase().search(tipo.toUpperCase()) > -1;
const buscaPorCategoria = (categoria) => (produto) =>
  produto.categoria.toUpperCase().search(categoria.toUpperCase()) > -1;

const busca = () => {
  return (event) => {
    const valor = event.target.value;
    const listaBusca =
    filtroBusca.value === "id"
    ? gastos.filter(buscaPorId(parseInt(valor)))
    : filtroBusca.value === "descricao"
    ? gastos.filter(buscaPorDescricao(valor))
    : filtroBusca.value === "tipo"
    ? gastos.filter(buscaPorTipo(valor))
    : gastos.filter(buscaPorCategoria(valor));
    atualizaGastos(listaBusca);
  };
};

inputBusca.addEventListener("keyup", busca());


const limpaCampos = () => {
	descricao.value = "";
	valor.value = "";
	tipo.value = "";
	categoria.value = "";
};

const adicionaGasto = () => {
	const gasto = {
		id: proximoId,
		descricao: descricao.value,
		valor: parseFloat(valor.value).toFixed(2),
		tipo: tipo.value,
		categoria: categoria.value,
	};

	console.log(gasto);
	gastos.push(gasto);

	proximoId++;

	limpaCampos();
	atualizaGastos();
};

btnInsere.onclick = adicionaGasto;

const atualizaGastos = (listaFiltro) => {
	let item = "";
  const utilizaLista = listaFiltro ? listaFiltro : gastos;
	for (gasto of utilizaLista) {
		item += `<div class="card">
    <h4 class="descricao-card">
      ${gasto.descricao}
    </h4>
    <h4>R$:<span>${gasto.valor}</span></h4>
    <h4>Tipo: <span class="${gasto.tipo}">${gasto.tipo}</span></h4>
    <h4>Categoria: <span>${gasto.categoria}</span></h4> 
    <button type="button" onclick="removerGasto(${gasto.id})"><i class="far fa-trash-alt"></i></button>
    <button type="button" onclick="carregaItem(${gasto.id})"><i class="fas fa-edit"></i></button>
  </div>`;
	};

  mediaReceitasDespesas(calculaTotalReceitas(), calculaTotalDespesas());

	visualizacao.innerHTML = item;
};

const removerGasto = (id) => {
	const removeIndex = gastos.findIndex((gasto) => gasto.id === id);
	gastos.splice(removeIndex, 1);

	atualizaGastos();
};

const carregaItem = (id) => {
	const itemCarregar = gastos.find((item) => item.id === id);
	setaDescricao(itemCarregar);
	setaValor(itemCarregar);
	setaTipo(itemCarregar);
	setaCategoria(itemCarregar);

	btnInsere.innerText = "Salvar";

	btnInsere.onclick = () => salvarEdicao(id);
};

const salvarEdicao = (id) => {
	const itemCarregar = gastos.find((item) => item.id === id);
	itemCarregar.descricao = descricao.value;
	itemCarregar.valor = parseFloat(valor.value).toFixed(2);
	itemCarregar.tipo = tipo.value;
	itemCarregar.categoria = categoria.value;

	btnInsere.innerText = "Inserir";
	btnInsere.onclick = adicionaGasto;
	atualizaGastos();
};

const setaDescricao = (item) => (descricao.value = item.descricao);
const setaValor = (item) => (valor.value = item.valor);
const setaTipo = (item) => (tipo.value = item.tipo);
const setaCategoria = (item) => (categoria.value = item.categoria);

const calculaTotalReceitas = () => {
  let receitas = 0;
  for (gasto of gastos) {
    if (gasto.tipo === 'Receita') {
      receitas += parseFloat(gasto.valor);
    }
  }
  totalReceitas.innerText = `Total de receitas: R$${receitas.toFixed(2)}`;
  return receitas;
}

const calculaTotalDespesas = () => {
  let despesas = 0;
  for (gasto of gastos) {
    if (gasto.tipo === 'Despesa') {
      despesas += parseFloat(gasto.valor);
    }
  }
  totalDespesas.innerText = `Total de despesas: R$${despesas.toFixed(2)}`;
  return despesas;
}

const mediaReceitasDespesas = (receitas, despesas) => {
  let quantReceitas, quantDespesas , avgReceitas , avgDespesas;
  avgReceitas = 0;
  avgDespesas = 0;
  quantReceitas = 0;
  quantDespesas = 0;

  for (gasto of gastos) {
    if (gasto.tipo === 'Receita') {
      quantReceitas++;
    } else {
      quantDespesas++;
    };
  };

  avgReceitas = receitas / quantReceitas;
  avgDespesas = despesas / quantDespesas;

  mediaReceita.innerText = `Média de todas as receitas: R$${avgReceitas.toFixed(2)}`;
  mediaDespesa.innerText = `Média de todas as despesas: R$${avgDespesas.toFixed(2)}`;

  saldoTotal.innerText = `Saldo total: R$${(receitas - despesas).toFixed(2)}`;

}