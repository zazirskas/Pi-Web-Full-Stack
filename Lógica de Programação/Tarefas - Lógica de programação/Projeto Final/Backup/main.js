// Carrega elementos HTML
const adicionarButton = document.getElementById("adicionarButton");
const startMsg = document.getElementById("startMsg");
const inputContainer = document.getElementById("inputContainer");
const system = document.getElementById("system");
const nomeAgendamento = document.getElementById("nomeAgendamento");
const sobrenomeAgendamento = document.getElementById("sobrenomeAgendamento");
const serviçoAgendamento = document.getElementById("serviçoAgendamento");
const dataAgendamento = document.getElementById("dataAgendamento");
const agendamentos = document.getElementById("agendamentos");
const searchInput = document.getElementById("searchInput");
const tipoFiltro = document.getElementById("tipoFiltro");

// Memórias
const listaAgendamentos = [];
let proximoId = 1;

// Funções de busca
searchInput.addEventListener("keyup", (event) => {
	const valor = event.target.value;
	const listaBusca =
		tipoFiltro.value === "nome"
			? listaAgendamentos.filter(buscaPorNome(valor))
			: tipoFiltro.value === "serviço"
			? listaAgendamentos.filter(buscaPorServiço(valor))
			: tipoFiltro.value === "id"
			? listaAgendamentos.filter(buscaPorId(parseInt(valor)))
			: listaAgendamentos.filter(buscaPorData(valor));
	atualizaLista(listaBusca);
});

const buscaPorNome = (nome) => {
	return (item) =>
		item.nomeCompleto.toUpperCase().search(nome.toUpperCase()) > -1;
};

const buscaPorServiço = (serviço) => {
	return (item) =>
		item.serviço.toUpperCase().search(serviço.toUpperCase()) > -1;
};

const buscaPorId = (id) => {
	return (item) => item.id === id;
};

const buscaPorData = (data) => {
	console.log(data);
	return (item) => item.data.toUpperCase().search(data.toUpperCase()) > -1;
};

// Adiciona item
const adicionarItem = (nome, sobrenome, serviço, data) => {
	if (!nome) {
		return alert("Não foi inserido um nome, insira um nome");
	} else if (!sobrenome) {
		return alert("Não foi inserido um sobrenome, insira um sobrenome");
	} else if (!serviço) {
		return alert("Não foi inserido um serviço, insira um serviço");
	} else if (!data) {
		return alert("Não foi inserido uma data, insira uma data");
	}

	if (validaTexto(nome) === true) {
		limpaCampos();
		return alert("Nome inserido inválido, o nome só pode conter texto!");
	} else if (validaTexto(sobrenome)) {
		return alert(
			"Sobrenome inserido inválido, o sobrenome só pode conter texto!"
		);
	} else if (validaData(data) === true) {
		return alert(
			"Nào é possivel fazer um agendamento no passado, favor inserir uma data futura"
		);
	}

	let item = {
		id: proximoId,
		nome,
		sobrenome,
		serviço,
		data: moment(data).format("LLL"),
		dataOriginal: data,
		nomeCompleto: nome + " " + sobrenome,
	};
	proximoId++;

	listaAgendamentos.push(item);

	atualizaLista();
	limpaCampos();
};

// Atualiza lista
const atualizaLista = (lista) => {
	let divAgendamento = "";

	const buscaLista = lista ? lista : listaAgendamentos;
	for (item of buscaLista) {
		divAgendamento += `<div class="agendamento">
    <h5>Nome: ${item.nomeCompleto}</h5>
    <h5>Serviço: ${item.serviço}</h5>
    <h5>Data agendada: ${item.data}</h5>
    <button onclick="carregaDados(${item.id})" id="editarButton">Editar</button>
    <button onclick="removerItem(${item.id})" class='remover' id="removerButton">Remover</button>
  </div>`;
	}

	agendamentos.innerHTML = divAgendamento;
};

// Inicia sistema
const start = () => {
	const systemContainer = document.getElementById("systemContainer");
	const adicionarButton = document.getElementById("adicionarButton");
	startMsg.style.display = "None";
	inputContainer.style.display = "Flex";
	systemContainer.style.marginBottom = "20px";
	adicionarButton.onclick = () =>
		adicionarItem(
			nomeAgendamento.value,
			sobrenomeAgendamento.value,
			serviçoAgendamento.value,
			dataAgendamento.value
		);
};

// Remove item
const removerItem = (id) => {
	const removeIndex = listaAgendamentos.findIndex((item) => item.id === id);
	listaAgendamentos.splice(removeIndex, 1);

	atualizaLista();
};

// Coloca informações nos campos ao clicar em editar
const setaCampos = (item) => {
	nomeAgendamento.value = item.nome;
	sobrenomeAgendamento.value = item.sobrenome;
	serviçoAgendamento.value = item.serviço;
	dataAgendamento.value = item.dataOriginal;
};

// Função no botào de editar que acha o elemento e iniciar a edição
const carregaDados = (id) => {
	const elemento = listaAgendamentos.find(
		(agendamento) => agendamento.id === id
	);
	setaCampos(elemento);
	adicionarButton.innerText = "Alterar";
	adicionarButton.onclick = () => editarItem(id);

	const removerButton = document.getElementsByClassName("remover");
	for (item of removerButton) {
		item.style.display = "none";
	}
};

// Limpa campos
const limpaCampos = () => {
	nomeAgendamento.value = "";
	sobrenomeAgendamento.value = "";
	serviçoAgendamento.value = "";
	dataAgendamento.value = "";
};

// Confirma a edição dos itens e faz validações nos novos dados inseridos
const editarItem = (id) => {
	const elemento = listaAgendamentos.find(
		(agendamento) => agendamento.id === id
	);

	elemento.id === id;

	if (!nomeAgendamento.value) {
		return alert("Não foi inserido um nome, insira um nome");
	} else {
		if (validaTexto(nomeAgendamento.value) === true) {
			return alert("Nome inserido inválido, o nome só pode conter texto!");
		}

		elemento.nome = nomeAgendamento.value;
	}

	if (!sobrenomeAgendamento.value) {
		return alert("Não foi inserido um sobrenome, insira um sobrenome");
	} else {
		if (validaTexto(sobrenomeAgendamento.value) === true) {
			return alert(
				"Sobrenome inserido inválido, o sobrenome só pode conter texto!"
			);
		}

		elemento.sobrenome = sobrenomeAgendamento.value;
		elemento.nomeCompleto = elemento.nome + " " + elemento.sobrenome;
	}

	if (!serviçoAgendamento.value) {
		return alert("Não foi inserido um serviço, insira um serviço");
	} else {
		elemento.serviço = serviçoAgendamento.value;
	}

	if (!dataAgendamento.value) {
		return alert("Não foi inserido uma data, insira uma data");
	} else {
		if (validaData(dataAgendamento.value) === true) {
			return alert(
				"Nào é possivel alterar um agendamento para o passado, favor inserir uma data futura"
			);
		}

		elemento.dataOriginal = dataAgendamento.value;
		elemento.data = moment(dataAgendamento.value).format("LLL");
	}

	atualizaLista();
	limpaCampos();

	adicionarButton.innerText = "Adicionar";
	adicionarButton.onclick = () =>
		adicionarItem(
			nomeAgendamento.value,
			sobrenomeAgendamento.value,
			serviçoAgendamento.value,
			dataAgendamento.value
		);
};

// Validação do texto para que não haja números
const validaTexto = (texto) => {
	let criterio = new RegExp("[0-9]", "g");
	return criterio.test(texto);
};

// Valida se a data inserida é anterior a data atual
const validaData = (data) => {
	const dataAgendamento = moment(data).format("L");
	const horaAgendamento = moment(data).format("LT");
	const hora = moment().format("LT");
	const hoje = moment().format("L");
	if (dataAgendamento < hoje) {
		return true;
	} else if (dataAgendamento === hoje && horaAgendamento < hora) {
		return true;
	}
};
