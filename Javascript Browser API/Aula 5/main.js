const descricaoDaDespesa = document.querySelector("#descricao-da-despesa");
const selectTipo = document.querySelector("#select-tipo");
const optionLista = document.getElementById("optionLista");
const optionLazer = document.getElementById("optionLazer");
const optionGasto = document.getElementById("optionGasto");
const optionContas = document.getElementById("optionContas");
const optionAlimentacao = document.getElementById("optionAlimentacao");
const chevron = document.getElementById("chevron-tipo");
const body = document.getElementsByTagName("body");
const botao = document.querySelector(".botao");
const tabelaGastos = document.querySelector("#tabela-gastos");
const localStorage = window.localStorage;

let interruptor = false;

let listaRegistros = JSON.parse(localStorage.getItem('itens'));

if (!listaRegistros) {
  listaRegistros = [];
};

descricaoDaDespesa.addEventListener("focus", () => {
	descricaoDaDespesa.classList.toggle("input-focus");
	descricaoDaDespesa.classList.toggle("input-default");
});

descricaoDaDespesa.addEventListener("blur", () => {
	descricaoDaDespesa.classList.toggle("input-default");
	descricaoDaDespesa.classList.toggle("input-focus");
});

selectTipo.addEventListener("click", () => {
	selectTipo.classList.toggle("select-focus");
	selectTipo.classList.toggle("select-default");

	if (interruptor === false) {
		optionLista.style.display = "block";
		chevron.classList.toggle("fa-chevron-down");
		chevron.classList.toggle("fa-chevron-up");
		interruptor = true;
	} else if (interruptor == true) {
		chevron.classList.toggle("fa-chevron-up");
		chevron.classList.toggle("fa-chevron-down");
		optionLista.style.display = "none";
		interruptor = false;
	}
});

optionLazer.addEventListener("click", () => {
	selectTipo.value = optionLazer.value;
	optionLista.style.display = "none";
	selectTipo.classList.toggle("select-focus");
	selectTipo.classList.toggle("select-default");
	chevron.classList.toggle("fa-chevron-up");
	chevron.classList.toggle("fa-chevron-down");
	interruptor = false;
});

optionGasto.addEventListener("click", () => {
	selectTipo.value = optionGasto.value;
	optionLista.style.display = "none";
	selectTipo.classList.toggle("select-focus");
	selectTipo.classList.toggle("select-default");
	chevron.classList.toggle("fa-chevron-up");
	chevron.classList.toggle("fa-chevron-down");
	interruptor = false;
});

optionContas.addEventListener("click", () => {
	selectTipo.value = optionContas.value;
	optionLista.style.display = "none";
	selectTipo.classList.toggle("select-focus");
	selectTipo.classList.toggle("select-default");
	chevron.classList.toggle("fa-chevron-up");
	chevron.classList.toggle("fa-chevron-down");
	interruptor = false;
});

optionAlimentacao.addEventListener("click", () => {
	selectTipo.value = optionAlimentacao.value;
	optionLista.style.display = "none";
	selectTipo.classList.toggle("select-focus");
	selectTipo.classList.toggle("select-default");
	chevron.classList.toggle("fa-chevron-up");
	chevron.classList.toggle("fa-chevron-down");
	interruptor = false;
});

botao.addEventListener("mouseenter", () => {
	botao.classList.toggle("botao-hover");
	botao.classList.toggle("botao");
});

botao.addEventListener("mouseout", () => {
	botao.classList.toggle("botao-hover");
	botao.classList.toggle("botao");
});

criarElemento = (descrição, tipo) => {
  let novoEntradaTag = document.createElement("tr");
	let novoEntradaDescricao = document.createElement("td");
	let novoEntradaTipo = document.createElement("td");
  
  novoEntradaDescricao.innerText = descrição; 
  novoEntradaTipo.innerText = tipo;

  novoEntradaTag.appendChild(novoEntradaDescricao);
	novoEntradaTag.appendChild(novoEntradaTipo);

	tabelaGastos.appendChild(novoEntradaTag);
};

botao.addEventListener("click", () => {
  
  if (!descricaoDaDespesa.value) {
    return alert("Insira uma descrição!");
	} else if (!selectTipo.value) {
    return alert("Insira um tipo!");
	};

  criarElemento(descricaoDaDespesa.value, selectTipo.value);
  
  salvaLocalStorage();
  
  selectTipo.value = "";
  descricaoDaDespesa.value = "";
});

salvaLocalStorage = () => {
  let registro = {
    descricao: descricaoDaDespesa.value,
    tipo: selectTipo.value
  };
  
  listaRegistros.push(registro);
  
  localStorage.setItem('itens', JSON.stringify(listaRegistros));
};

atualizaTela = () => {  
  listaRegistros.forEach(element => {
    if (element.descricao && element.tipo) {
      criarElemento(element.descricao, element.tipo);
    };
  });
};

atualizaTela();