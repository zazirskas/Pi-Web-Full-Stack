const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const visualizacao = document.getElementById('visualizacao');

const soma = n1 => n2 => n1 + n2;

const multiplicacao = n1 => n2 => n1 * n2;

const divisao = n1 => n2 => n1 / n2;

const subtracao = n1 => n2 => n1 - n2;

const incrementaUm = soma(1);

const dobro = multiplicacao(2);

const quadrado = numero => multiplicacao(numero)(numero);

const executar = (n1, n2) => {
  visualizacao.innerHTML = `Numero 1: ${n1} <br> Número 2: ${n2} <br>
  Soma: ${soma(n1)(n2)} <br>
  Multiplicação: ${multiplicacao(n1)(n2)} <br>
  Divisão: ${divisao(n1)(n2)} <br>
  Subtração: ${subtracao(n1)(n2)} <br>
  incremento: ${incrementaUm(soma(n1)(n2))} <br>
  Dobro número 1: ${dobro(n1)} <br>
  Dobro número 2: ${dobro(n2)} <br>
  Quadrado número 1: ${quadrado(n1)} <br>
  Quadrado número 2: ${quadrado(n2)} <br>

  `
}