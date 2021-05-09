const nomes = [
	"Nathan",
	"Otavio",
	"Matheus",
	"Roberto",
	"Nathan",
	"Alberto",
	"Alberto",
	"Otavio",
];

const nomesNaoRepetidos = nomes.reduce((acc, nome) => {
  if (!acc.includes(nome)) {
    acc.push(nome);
  };
  return acc;
}, [])

console.log(nomesNaoRepetidos);