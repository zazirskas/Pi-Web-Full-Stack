const alunos = [
	{
		nome: "Nathan",
		nota1: 5,
		nota2: 7,
		nota3: 10,
	},
	{
		nome: "Rodrigo",
		nota1: 7,
		nota2: 9,
		nota3: 8,
	},
	{
		nome: "Jeferson",
		nota1: 6,
		nota2: 7,
		nota3: 9,
	},
	{
		nome: "Alan",
		nota1: 10,
		nota2: 7,
		nota3: 10,
	},
	{
		nome: "Jorge",
		nota1: 3,
		nota2: 10,
		nota3: 10,
	},
	{
		nome: "Otávio",
		nota1: 5,
		nota2: 4,
		nota3: 4,
	},
];

let media, notaAcumulada;
notaAcumulada = 0;
media = 0;

for (elemento of alunos) {
	for (i in elemento) {
		if (i !== 'nome') {
			notaAcumulada += elemento[i];
		}
    else console.log(elemento[i]);
	}
  media = notaAcumulada / 3;
  console.log('Média: ', media);
  if (media < 5) {
    console.log('Este aluno está Reprovado');
  }
  else console.log('Este aluno esta Aprovado');
	console.log('------------------');
  notaAcumulada = 0;
}
