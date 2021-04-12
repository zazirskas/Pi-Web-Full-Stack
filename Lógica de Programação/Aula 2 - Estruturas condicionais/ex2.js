let n1, n2 , n3;

n1 = parseFloat(prompt('Insira um número: '));
n2 = parseFloat(prompt('Insira um número: '));
n3 = parseFloat(prompt('Insira um número: '));

if (n1 + n2 > n3) document.write(`O ${n1} + ${n2} é maior que ${n3}`);
else if (n1 + n2 < n3) document.write(`O ${n1} + ${n2} é menor que ${n3}`);
else if (n1 + n2 === n3) document.write(`O ${n1} + ${n2} é igual a ${n3}`);