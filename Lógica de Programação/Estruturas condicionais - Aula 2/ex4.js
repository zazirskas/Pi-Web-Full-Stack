let n1, n2 , n3;

n1 = parseFloat(prompt('Insira um número: '));
n2 = parseFloat(prompt('Insira um número: '));
n3 = parseFloat(prompt('Insira um número: '));

maiorNúmero = Math.max(n1,n2,n3);
menorNúmero = Math.min(n1,n2,n3);

document.write(maiorNúmero, ' ');

if (n1 < maiorNúmero && n1 > menorNúmero) document.write(n1);
else if (n2 < maiorNúmero && n2 > menorNúmero) document.write(n2);
else if (n3 < maiorNúmero && n3 > menorNúmero) document.write(n3);

document.write(' ',menorNúmero);

