const sequencia = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30,
	31,
	32,
	33,
	34,
	35,
	36,
	37,
	38,
	39,
	40,
	41,
	42,
	43,
	44,
	45,
	46,
	47,
	48,
	49,
	50,
];

let quantidadePares, quantidadeImpares;
quantidadePares = 0;
quantidadeImpares = 0;

const pares = [];
const impares = [];

for (numero of sequencia) {
  if (numero % 2 === 0) {
    pares.push(numero);
    quantidadePares++;
  } else {
    impares.push(numero);
    quantidadeImpares++;
  }
}

for (index in sequencia) {
  if (sequencia[index] % 2 === 0) {
    pares.push(sequencia[index]);
    quantidadePares++;
  } else {
    impares.push(sequencia[index]);
    quantidadeImpares++;
  }
}

for (let i = 0; i < sequencia.length; i++) {
  if (sequencia[i] % 2 === 0) {
    pares.push(sequencia[i]);
    quantidadePares++;
  } else {
    impares.push(sequencia[i]);
    quantidadeImpares++;
  }
}

console.log(`Os números pares são: ${pares}`);
console.log(`São ${quantidadePares} números pares`);

console.log(`Os números impares são: ${impares}`);
console.log(`São ${quantidadeImpares} números impares`);