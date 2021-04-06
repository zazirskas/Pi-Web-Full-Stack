colaboradores = [];

const nomeColaborador = document.getElementById('nomeColaborador');
const idadeColaborador = document.getElementById('idadeColaborador');
const cargoColaborador = document.getElementById('cargoColaborador');
const salarioColaborador = document.getElementById('salarioColaborador');
const admissaoColaborador = document.getElementById('admissaoColaborador');
const divColaboradores = document.getElementById('colaboradores');
const totalColaboradores = document.getElementById('totalColaboradores');
const custoMensal = document.getElementById('custoMensal');
const mediaIdade = document.getElementById('mediaIdade');
const mediaSalarios = document.getElementById('mediaSalarios');
const inputBusca = document.getElementById('inputBusca');
const tipoBusca = document.getElementById('tipoBusca');
const edicao = document.getElementById('edicao');

const busca = () => {
  return () => {
    const valor = event.target.value;
    const listaBusca = tipoBusca.value === 'id' ? colaboradores.filter(buscaPorId(valor)) : tipoBusca.value === 'nome' ? colaboradores.filter(buscaPorNome(valor)) : colaboradores.filter(buscaPorCargo(valor));
    atualizaLista(listaBusca);
  }
}




inputBusca.addEventListener('keyup', busca());

const buscaPorId = (id) => {
  return (colaborador) => colaborador.id === parseInt(id);
};

const buscaPorNome = (nome) => {
  return (colaborador) => colaborador.nome.toUpperCase().search(nome.toUpperCase()) > -1;
};

const buscaPorCargo = (cargo) => {
  return (colaborador) => colaborador.cargo.toUpperCase().search(cargo.toUpperCase()) > -1;
};


let proximoId = 1;

const adicionarColaborador = (nome, idade, cargo, salario, admissao) => {
  const colaborador = {
    id : proximoId,
    nome,
    idade : parseInt(idade),
    cargo,
    salario : parseFloat(salario),
    admissao
  };

  proximoId++;

  colaboradores.push(colaborador);
  console.log(colaboradores);

  atualizaLista();
};

const atualizaLista = (listaPersonalizada) => {
  let cards = '';
  let custoTotal = 0;
  let idade = 0;
  let salario = 0;
  const atualizaLista = listaPersonalizada ? listaPersonalizada : colaboradores;
  for (colaborador of atualizaLista) {
    cards += `<div class="colaborador">
    <h5>Nome: ${colaborador.nome}</h5>
    <h5>Idade: ${colaborador.idade}</h5>
    <h5>Cargo: ${colaborador.cargo}</h5>
    <h5>Salário: ${colaborador.salario}</h5>
    <h5>Data de admisão: ${colaborador.admissao}</h5>
    <div class="selecionar">
    <label for="selecionar"><strong>Selecionar?</strong></label>
    <input type="radio" name="selecionar" id="select" value="${colaborador.id}"/>
    </div>
    </div>`
    custoTotal += colaborador.salario;
    idade += colaborador.idade;
    salario += colaborador.salario;
  }
  
  let quantidadeColaboradores = colaboradores.length;
  totalColaboradores.innerText = `Total de colaboradores: ${quantidadeColaboradores}`
  custoMensal.innerText = `Custo mensal de colaboradores: R$${custoTotal}`;
  mediaIdade.innerText = `Média da idade dos colaboradores: ${idade/quantidadeColaboradores}`;
  mediaSalarios.innerText = `Média dos salários dos colaboradores: R$${salario/quantidadeColaboradores}`;
  
  divColaboradores.innerHTML = cards;
  
  limparInput();
}

const limparInput = () => {
nomeColaborador.value = '';
idadeColaborador.value = '';
cargoColaborador.value = '';
salarioColaborador.value = '';
admissaoColaborador.value = '';
}

const removerColaborador = () => {
  let checkBoxes = document.getElementsByName('selecionar');
  for (selected of checkBoxes) {
    if (selected.checked == true) {
      const removeIndex = colaboradores.findIndex((colaborador) => colaborador.id === parseInt(selected.value));
      colaboradores.splice(removeIndex, 1);
    }
  }
  atualizaLista();
}

const editarColaborador = () => {
  let radios = document.getElementsByName('selecionar');
  for (selected of radios) {
    if (selected.checked == true) {
      const editar = colaboradores.find(buscaPorId(selected.value));
      nomeColaborador.value = editar.nome;
      idadeColaborador.value = editar.idade;
      cargoColaborador.value = editar.cargo;
      salarioColaborador.value = editar.salario;
      admissaoColaborador.value = editar.admissao;

      edicao.innerText = 'Aplicar alterações';

      edicao.onclick = () => aplicarEdicao(editar.id, nomeColaborador.value, idadeColaborador.value, cargoColaborador.value, parseFloat(salarioColaborador.value), admissaoColaborador.value);

    };
  };
};

const aplicarEdicao = (id, nome, idade, cargo, salario, admissao) => {
  const aplicarEdicao = colaboradores.find(buscaPorId(id));
  aplicarEdicao.id = id;
  aplicarEdicao.nome = nome;
  aplicarEdicao.idade = idade;
  aplicarEdicao.cargo = cargo;
  aplicarEdicao.salario = salario;
  aplicarEdicao.admissao = admissao;
  edicao.innerText = 'Editar colaborador';

  atualizaLista();
  edicao.onclick = () => editarColaborador();
}