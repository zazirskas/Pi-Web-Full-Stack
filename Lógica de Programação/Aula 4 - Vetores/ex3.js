const lista = [10, 15, 50];

let n1, n2, n3;

n1 = parseFloat(prompt('Insira um número a ser inserido no array: '));
n2 = parseFloat(prompt('Insira um número a ser inserido no array: '));
n3 = parseFloat(prompt('Insira um número a ser inserido no array: '));

console.log(lista.concat(n1, n2, n3));