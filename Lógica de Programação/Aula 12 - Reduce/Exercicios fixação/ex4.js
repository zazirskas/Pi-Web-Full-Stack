const colaboradores = [
  {
      id: 1,
      nome: 'Nathan',
      salario: 10000
  },
  {
      id: 2,
      nome: 'Mateus',
      salario: 3000
  },
  {
      id: 3,
      nome: 'Roberta',
      salario: 5000
  }
];

const somaTotal = colaboradores.reduce((acc, colaborador) => {
  return acc + colaborador.salario;
}, 0);

const mediaSalarios = colaboradores.reduce((acc, colaborador) => {
  return somaTotal / colaboradores.length;
}, 0)

console.log(somaTotal);
console.log(mediaSalarios);