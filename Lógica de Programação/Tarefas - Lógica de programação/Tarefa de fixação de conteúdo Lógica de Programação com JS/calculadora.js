const dados = document.getElementById('dados');
const demonstraResultado = document.getElementById('resultado');

const calcular = (expressao) => {
  if (!expressao) alert('Insira uma expressão válida!');
  let resultadoCalculo = eval(expressao);
  demonstraResultado.innerText = resultadoCalculo;
}

const calcularQuadrado = (número) => {
 let resultadoCalculo = número * número;
 demonstraResultado.innerText = resultadoCalculo;
}