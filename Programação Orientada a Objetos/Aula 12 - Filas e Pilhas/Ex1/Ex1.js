class Tarefas {
  constructor(listaTarefas = []) {
    this.listaTarefas = listaTarefas
  }

  adicionaTarefa(tarefa) {
    this.listaTarefas = [...this.listaTarefas, tarefa]

    console.log(`${tarefa} incluída na lista com sucesso!`)

    return this.listaTarefas
  }

  removeTarefa() {
    const [tarefaConcluida, ...tarefasRestantes] = this.listaTarefas

    this.listaTarefas = tarefasRestantes

    if (!tarefaConcluida) {
      console.log('Não há tarefas para fazer')
    } else {
      console.log(`${tarefaConcluida} foi concluído`);
    }
    return this.listaTarefas
  }
}

const tarefas = new Tarefas();

tarefas.adicionaTarefa('Lavar Louça')
tarefas.adicionaTarefa('Lavar Roupas')

console.log(tarefas)

tarefas.removeTarefa();
tarefas.removeTarefa();
tarefas.removeTarefa();

console.log(tarefas)

