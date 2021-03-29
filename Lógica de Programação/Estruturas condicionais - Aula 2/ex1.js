let n1, n2 , n3;

n1 = parseFloat(prompt('Insira um número: '));
n2 = parseFloat(prompt('Insira um número: '));
n3 = parseFloat(prompt('Insira um número: '));

document.write(`O maior número recebido foi: ${Math.max(n1, n2, n3)}`);

document.write(`\n O menor número recebido foi: ${Math.min(n1, n2, n3)}`);