const listaAlunos = [];
const inputPrimeiraNota = document.getElementById("primeiraNota");
const inputSegundaNota = document.getElementById("segundaNota");
const visualizacao = document.getElementById("visualizacao");
const inputBusca = document.getElementById("inputBusca");
const tipoBusca = document.getElementById("tipoBusca");

let proximoId = 1;

const adicionaAluno = (nomeAluno, primeiraNota, segundaNota, materia) => {
	if (!nomeAluno || !primeiraNota || !segundaNota || !materia) {
		return exibeMensagem("Preencha todos os campos!");
	}

	const media = calcular(
		divisao,
		soma(parseFloat(primeiraNota), parseFloat(segundaNota)),
		2
	);

	const aluno = {
		id: proximoId,
		nomeAluno,
		primeiraNota: parseFloat(primeiraNota),
		segundaNota: parseFloat(segundaNota),
		materia,
		media: media,
		aprovado: media >= 5 ? true : false,
	};

	listaAlunos.push(aluno);
	proximoId++;
	console.log(listaAlunos);
	atualizaLista();
};

const atualizaLista = (ListaAUtilizar) => {
	let cards = "";
	let lista = ListaAUtilizar ? ListaAUtilizar : listaAlunos;
		for (aluno of lista) {
			cards += `<div class="card">
    <div class="descricao-card">
        <p><b>${aluno.nomeAluno}</b></p>
        <p>Nota 1: <b>${aluno.primeiraNota}</b></p>
        <p>Nota 2: <b>${aluno.segundaNota}</b></p>
        <p>Matéria: <b>${aluno.materia}</b></p>
        <p>Média Aluno: <b>${aluno.media}</b></p>
        <p>Aprovado: ${
					aluno.aprovado === true
						? '<b class="aprovado">Sim</b></p>'
						: '<b class="reprovado">Não</b></p>'
				}
        <!-- <p>Aprovado: <b class="reprovado">Não</b></p> -->
    </div>
    <div class="acoes">
        <span class="material-icons acao" onclick="excluiAluno(${aluno.id})">
            delete
        </span>
    </div>
</div>`;
		}

	visualizacao.innerHTML = cards;
};

const excluiAluno = (id) => {
	const indexAlunoAExcluir = listaAlunos.findIndex((aluno) => aluno.id === id);
	listaAlunos.splice(indexAlunoAExcluir, 1);
	atualizaLista();
};

const validarNota = (nota, input) => {
	if (!(nota >= 0 && nota <= 10)) {
		input.value = "";
		return exibeMensagem("Insira um valor entre 0 e 10");
	}
};

inputPrimeiraNota.addEventListener("keyup", (event) => {
	const valor = event.target.value;
	validarNota(valor, inputPrimeiraNota);
});

inputSegundaNota.addEventListener("keyup", (event) => {
	const valor = event.target.value;
	validarNota(valor, inputSegundaNota);
});

const buscaPorId = (id) => {
	return (Aluno) => Aluno.id === parseInt(id);
};

const buscaPorNome = (nome) => {
	return (Aluno) =>
		Aluno.nomeAluno.toUpperCase().search(nome.toUpperCase()) > -1;
};

inputBusca.addEventListener("keyup", (event) => {
	const valor = event.target.value;
	const listaBusca =
		tipoBusca.value === "id"
			? listaAlunos.filter(buscaPorId(valor))
			: tipoBusca.value === "nome"
			? listaAlunos.filter(buscaPorNome(valor))
			: 0;
	atualizaLista(listaBusca);
});
