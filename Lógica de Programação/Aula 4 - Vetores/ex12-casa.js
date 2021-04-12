let n1, n2, lista = [];

n1 = parseInt(prompt('Insira o primeiro número: '));

n2 = parseInt(prompt('Insira o segundo número: '));

do {
  lista.push(n1)
  n1++;

} while (n1 <= n2);

console.log(lista)