
const lista = document.getElementById('lista');

const numeros = ["10", "20", "30", "40"];

let valor = parseFloat(prompt('Insira o valor pelo qual deseja realizar as operações matematicas: '));

const listaOperacoes = numeros.map((elemento) => (
  {
    soma : `A soma de ${valor} e ${elemento} é: ${parseFloat(elemento) + valor}`,
    subtracao : `A subtracao de ${valor} e ${elemento} é: ${parseFloat(elemento) - valor}`,
    multiplicacao : `A multiplicacao de ${valor} e ${elemento} é: ${parseFloat(elemento) * valor}`,
    divisao : `A divisao de ${valor} e ${elemento} é: ${parseFloat(elemento) / valor}`
  }
));

const atualizaLista = () => {
  let li = ''
  for (item of listaOperacoes) {
    li += `<br><li>${item.soma}<br>${item.subtracao}<br>${item.multiplicacao}<br>${item.divisao}</li>`;
  }
  lista.innerHTML = li;
}

atualizaLista();