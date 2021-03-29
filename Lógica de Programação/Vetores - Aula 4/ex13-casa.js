let n1, n2;

const listaPares = [], listaImpares = [];

n1 = parseInt(prompt('Insira o primeiro número: '));

n2 = parseInt(prompt('Insira o segundo número: '));

do {

  if (n1 % 2 === 0) {
    listaPares.push(n1);
  }
  else listaImpares.push(n1);

  n1++;

} while (n1 <= n2);

console.log('Lista de pares: ', listaPares);
console.log('Lista de impares: ', listaImpares);