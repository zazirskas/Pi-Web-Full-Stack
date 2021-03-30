// Utilizando funções de alta ordem

n1 = parseFloat(prompt('Insira um primeiro número: '));

n2 = parseFloat(prompt("Insira um segundo número: "));

const soma = (a,b) => a + b;

const multiplicação = (a,b) => a * b;

const subtração = (a,b) => a - b;

const divisão = (a,b) => a / b;

const calcular = (operação, a, b) => operação(a, b);

console.log(`Soma: ${calcular(soma, n1, n2)}`);
console.log(`Multiplicação: ${calcular(multiplicação, n1, n2)}`);
console.log(`Subtração: ${calcular(subtração, n1, n2)}`);
console.log(`Divisão: ${calcular(divisão, n1, n2)}`);

console.log(`Média: ${calcular(divisão, calcular(soma, n1, n2), 2)}`);