const listaTarefas = document.getElementById("listaTarefas");
const descricaoTarefa = document.getElementById("descricaoTarefa");
const tituloTarefa = document.getElementById("tituloTarefa");
const listaConcluidas = document.getElementById("listaConcluidas");
const inputBusca = document.getElementById("inputBusca");

const tarefas = [];
const tarefasConcluidas = [];

inputBusca.addEventListener('keyup', (event) => {
  const titulo = event.target.value
  const listaTarefas = buscaTarefa(titulo);
  const listaTarefasConcluidas = buscaTarefaConcluidas(titulo);
  atualizaListaTarefas(listaTarefas, listaTarefasConcluidas);
});



const geraId = () => {
	const id = Math.floor(Math.random() * 100000 + 1);
	return id;
};

const adicionaTarefa = (titulo, descricao) => {
	const tarefa = {
		titulo,
		descricao,
		id: geraId(),
    checkbox : false
	};

  tarefas.push(tarefa);

	resetaCampos();
	atualizaListaTarefas();
};

const resetaCampos = () => {
	descricaoTarefa.value = "";
	tituloTarefa.value = "";
};

const atualizaListaTarefas = (listaCartasTarefas, listaCartasTarefasConcluidas) => {
	let cartaTarefas = "", cartaTarefasConcluidas = "";
  const tarefasAListar = listaCartasTarefas ? listaCartasTarefas : tarefas;
  const tarefasAListarConcluidas = listaCartasTarefasConcluidas ? listaCartasTarefasConcluidas : tarefasConcluidas;
	for (tarefa of tarefasAListar) {
		cartaTarefas += `<div id="card">
    <h4>${tarefa.titulo}</h4>
    <p>${tarefa.descricao}</p>
    <div>
			<label for="caixaConcluida">Tarefa concluída</label>
			<input type="checkbox" name="" id="caixaConcluida" onchange="atualizaConcluidas(${tarefa.id})"/>
      <button type="button" onclick="removeTarefa(${tarefa.id})">Remover Tarefa</button>
		</div>
  </div>`;
	}
  for (tarefa of tarefasAListarConcluidas) {
    cartaTarefasConcluidas += 
    `<div id="card">
    <h4>${tarefa.titulo}</h4>
    <p>${tarefa.descricao}</p>
    <div>
      <button type="button" onclick="removeTarefaConcluida(${tarefa.id})">Remover Tarefa</button>
		</div>
  </div>`;

  }

  listaConcluidas.innerHTML = cartaTarefasConcluidas;
	listaTarefas.innerHTML = cartaTarefas;
};

const removeTarefa = (id) => {
  let removeIndex = tarefas.findIndex((tarefa) => tarefa.id === id);
  tarefas.splice(removeIndex, 1);
  atualizaListaTarefas();
}

const removeTarefaConcluida = (id) => {
  let removeIndexConcluido = tarefasConcluidas.findIndex((tarefa) => tarefa.id === id);
  tarefasConcluidas.splice(removeIndexConcluido, 1);
  atualizaListaTarefas();
}

const atualizaConcluidas = (id) => {
  let concluidaIndex = tarefas.findIndex((tarefa) => tarefa.id === id);
  tarefasConcluidas.push(tarefas[concluidaIndex]);
  tarefas.splice(concluidaIndex, 1);
  atualizaListaTarefas();
}

const buscaTarefa = (titulo) => {
  const tituloUppercase = titulo.toUpperCase();
  const tarefasEncontradas = tarefas.filter((tarefa) => tarefa.titulo.toUpperCase().search(tituloUppercase) > -1);
  return tarefasEncontradas;
}

const buscaTarefaConcluidas = (titulo) => {
  const tituloUppercase = titulo.toUpperCase();
  const tarefasEncontradasConcluidas = tarefasConcluidas.filter((tarefa) => tarefa.titulo.toUpperCase().search(tituloUppercase) > -1);
  return tarefasEncontradasConcluidas;
}