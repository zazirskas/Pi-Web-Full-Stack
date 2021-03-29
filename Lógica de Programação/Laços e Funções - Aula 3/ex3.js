let n1, n2, cont;

n1 = parseInt(prompt("Insira um primeiro número: "));

n2 = parseInt(prompt("Insira um segundo número: "));

cont = 0;

function numeroPares(inicial, final) {
	while (n1 <= n2) {
		if (n1 % 2 === 0) {
			console.log(n1);
			cont++;
		}
		n1++;
	}
  console.log(`São ${cont} números pares entre o primeiro número e o segundo número`);
}

numeroPares(n1, n2)
