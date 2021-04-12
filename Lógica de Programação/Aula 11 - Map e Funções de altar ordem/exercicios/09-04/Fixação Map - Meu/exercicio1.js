const alunos = [
  {
      id: 1,
      nome: 'Nathan',
      nota1: 10,
      nota2: 5,
      nota3: 6
  },
  {
      id: 2,
      nome: 'Gabriel',
      nota1: 10,
      nota2: 8,
      nota3: 8
  },
  {
      id: 3,
      nome: 'Otavio',
      nota1: 4,
      nota2: 3,
      nota3: 5
  }
];

const alunosComMedia = alunos.map((aluno) => (
  {
    ...aluno,
    media : calcular(dividir, somar(aluno.nota1 + aluno.nota2, aluno.nota3), 3),
    aprovado : aluno.media >= 5 ? 'Aprovado' : 'Reprovado'
  }
));

console.log(alunosComMedia);