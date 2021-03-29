const lista = [10, 15, 30];

let n1, n2;

n1 = parseFloat(prompt('Insira um número a ser inserido no array: '));
n2 = parseFloat(prompt('Insira um número a ser inserido no array: '));

lista.unshift(n1);
lista.push(n2);

console.log(lista);