const descricaoDaDespesa = document.querySelector('#descricao-da-despesa');
const selectTipo = document.querySelector('#select-tipo');
const optionLista = document.getElementById('optionLista');
const optionLazer = document.getElementById('optionLazer');
const optionGasto = document.getElementById('optionGasto');
const optionContas = document.getElementById('optionContas');
const optionAlimentacao = document.getElementById('optionAlimentacao');
const chevron = document.getElementById('chevron-tipo');
const body = document.getElementsByTagName('body');
const botao = document.querySelector('.botao');
const tabelaGastos = document.querySelector("#tabela-gastos");

let interruptor = false;


descricaoDaDespesa.addEventListener('focus', () => {
  descricaoDaDespesa.classList.toggle('input-focus');
  descricaoDaDespesa.classList.toggle('input-default');
});

descricaoDaDespesa.addEventListener('blur', () => {
  descricaoDaDespesa.classList.toggle('input-default');
  descricaoDaDespesa.classList.toggle('input-focus');
});

selectTipo.addEventListener('click', () => {
  selectTipo.classList.toggle('select-focus');
  selectTipo.classList.toggle('select-default');
  
  if (interruptor === false) {
    optionLista.style.display = 'block';
    chevron.classList.toggle('fa-chevron-down');
    chevron.classList.toggle('fa-chevron-up');
    interruptor = true;
  } else if (interruptor == true) {
    chevron.classList.toggle('fa-chevron-up');
    chevron.classList.toggle('fa-chevron-down');
    optionLista.style.display = 'none';
    interruptor = false;
  }
})


optionLazer.addEventListener('click', () => {
  selectTipo.value = optionLazer.value;
  optionLista.style.display = 'none';
  selectTipo.classList.toggle('select-focus');
  selectTipo.classList.toggle('select-default');
  chevron.classList.toggle('fa-chevron-up');
  chevron.classList.toggle('fa-chevron-down');
  interruptor = false;
})

optionGasto.addEventListener('click', () => {
  selectTipo.value = optionGasto.value;
  optionLista.style.display = 'none';
  selectTipo.classList.toggle('select-focus');
  selectTipo.classList.toggle('select-default');
  chevron.classList.toggle('fa-chevron-up');
  chevron.classList.toggle('fa-chevron-down');
  interruptor = false;
})

optionContas.addEventListener('click', () => {
  selectTipo.value = optionContas.value;
  optionLista.style.display = 'none';
  selectTipo.classList.toggle('select-focus');
  selectTipo.classList.toggle('select-default');
  chevron.classList.toggle('fa-chevron-up');
  chevron.classList.toggle('fa-chevron-down');
  interruptor = false;
})

optionAlimentacao.addEventListener('click', () => {
  selectTipo.value = optionAlimentacao.value;
  optionLista.style.display = 'none';
  selectTipo.classList.toggle('select-focus');
  selectTipo.classList.toggle('select-default');
  chevron.classList.toggle('fa-chevron-up');
  chevron.classList.toggle('fa-chevron-down');
  interruptor = false;
})

botao.addEventListener('mouseenter', () => {
  botao.classList.toggle('botao-hover');
  botao.classList.toggle('botao');
})

botao.addEventListener('mouseout', () => {
  botao.classList.toggle('botao-hover');
  botao.classList.toggle('botao');
})

botao.addEventListener('click', () => {
  let novoEntradaTag = document.createElement('tr');
  let novoEntradaDescricao = document.createElement('td');
  let novoEntradaTipo = document.createElement('td');

  novoEntradaDescricao.innerText = descricaoDaDespesa.value;
  novoEntradaTipo.innerText = selectTipo.value;

  if (!novoEntradaDescricao.innerText) {
    return alert('Insira uma descrição!');
  } else if (!novoEntradaTipo.innerText) {
    return alert('Insira um tipo!');
  }

  novoEntradaTag.appendChild(novoEntradaDescricao);
  novoEntradaTag.appendChild(novoEntradaTipo);

  tabelaGastos.appendChild(novoEntradaTag);

  selectTipo.value = '';
  descricaoDaDespesa.value = '';
})