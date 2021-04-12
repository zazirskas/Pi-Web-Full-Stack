const matriz = [
	[1, 3, 6, 7],
	[9, 3, 7, 10],
];

const novoArray = [];

for (index in matriz) {
	for (i in matriz[index]) {
		novoArray.push(matriz[index][i]);
	}
}

console.log(novoArray);