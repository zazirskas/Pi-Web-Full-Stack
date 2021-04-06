const alunos = [];

const visualizacao = document.getElementById("visualizacao");
const indicadores = document.getElementById("indicadores");
const inputBusca = document.getElementById("inputBusca");
const tipoBusca = document.getElementById("tipoBusca");

// inputBusca.addEventListener("keyup", (event) => {
// 	const value = event.target.value;
// 	const listaBusca =
// 		tipoBusca.value === "id"
// 			? alunos.filter(buscaPorId(value))
// 			: tipoBusca.value === "nome"
// 			? alunos.filter(buscaPorNome(value))
// 			: tipoBusca.value === "professor"
// 			? alunos.filter(buscaPorProfessor(value))
// 			: alunos.filter(buscaPorIdade(value));

// 	atualizaLista(listaBusca);
// });


const busca = () => {
  return () => {
    const value = event.target.value;
		const listaBusca =
    tipoBusca.value === "id"
    ? alunos.filter(buscaPorId(value))
    : tipoBusca.value === "nome"
    ? alunos.filter(buscaPorNome(value))
    : tipoBusca.value === "professor"
    ? alunos.filter(buscaPorProfessor(value))
    : alunos.filter(buscaPorIdade(value));
    
		atualizaLista(listaBusca);
	};
};

inputBusca.addEventListener("keyup", busca());

const buscaPorId = (id) => (aluno) => aluno.id === parseInt(id);

const buscaPorNome = (nome) => (aluno) =>
	aluno.nome.toUpperCase().search(nome.toUpperCase()) > -1;

const buscaPorProfessor = (professor) => (aluno) =>
	aluno.professor.toUpperCase().search(professor.toUpperCase()) > -1;

const buscaPorIdade = (idade) => (aluno) => aluno.idade === parseInt(idade);

let proximoId = 1;

const adicionaAluno = (nome, idade, professor, temAcesso, mensalidade) => {
	const aluno = {
		id: proximoId,
		nome,
		idade: parseInt(idade),
		exerciciosAdaptados: parseInt(idade) > 60 ? true : false,
		professor,
		temAcesso: temAcesso === "1" ? true : false,
		mensalidade,
	};

	proximoId++;

	alunos.push(aluno);
	console.log(alunos);

	atualizaLista();
};

const atualizaLista = (listaBusca) => {
	let item = "";

	const utilizaLista = listaBusca ? listaBusca : alunos;

	for (aluno of utilizaLista) {
		item += `<div class="card">
    <div class="descricao-card">
        <p>Nome: <b>${aluno.nome}</b></p>
        <p>Idade: <b>${aluno.idade}</b></p>
        <p>Exercícios Adaptados: <b>${
					aluno.exerciciosAdaptados === true ? "Sim" : "Não"
				}</b></p>
        <p>Professor Responsável: <b>${aluno.professor}</b></p>
        <p>Tem acesso: <span onclick="mudaAcesso(${aluno.id})" class="${
			aluno.temAcesso === true ? "sim" : "nao"
		}"><b>${aluno.temAcesso === true ? "Sim" : "Não"}</b></span></p>
        <p>Valor mensalidade: <b>R$${aluno.mensalidade}</b></p>
    </div>
    <div class="acoes">
        <span class="material-icons acao" onclick="removeAluno(${aluno.id})">
            delete
        </span>
    </div>
</div>`;
	}

	atualizaIndicadores();

	visualizacao.innerHTML = item;
};

const removeAluno = (id) => {
	const removeIndex = alunos.findIndex((aluno) => aluno.id === id);
	alunos.splice(removeIndex, 1);

	atualizaLista();
};

const atualizaIndicadores = () => {
	let somaIdades = 0;
	let somaMensalidades = 0;

	for (aluno of alunos) {
		somaIdades += aluno.idade;
		somaMensalidades += parseFloat(aluno.mensalidade);
	}

	let indicador = `<h3>Total de Alunos: ${alunos.length}</h3>
  <h3>Média idades: ${calcular(dividir, somaIdades, alunos.length)}</h3>
  <h3>Total mensalidades: ${somaMensalidades}</h3>
  <h3>Média mensalidades: ${calcular(
		dividir,
		somaMensalidades,
		alunos.length
	)}</h3>`;

	indicadores.innerHTML = indicador;
};

const mudaAcesso = (id) => {
	const editando = alunos.find((aluno) => aluno.id === id);
	if (editando.temAcesso === true) {
		editando.temAcesso = false;
	} else {
		editando.temAcesso = true;
	}
	atualizaLista();
};
