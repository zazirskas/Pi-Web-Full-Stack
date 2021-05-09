const colaboradores = [
  {
      id: 1,
      nome: 'Thiago',
      salario: 3000,
      cargo: 'Dev Full Stack Jr'
  },
  {
      id: 2,
      nome: 'Matheus',
      salario: 3200,
      cargo: 'Dev Full Stack Jr'
  },
  {
      id: 3,
      nome: 'Otavio',
      salario: 2600,
      cargo: 'Dev Full Stack Jr'
  },
  {
      id: 4,
      nome: 'Jorge',
      salario: 9000,
      cargo: 'Dev Full Stack Snr'
  },
  {
      id: 5,
      nome: 'Alan',
      salario: 10000,
      cargo: 'Dev Full Stack Snr'
  },
  {
      id: 6,
      nome: 'David',
      salario: 11000,
      cargo: 'Dev Full Stack Snr'
  },
  {
      id: 7,
      nome: 'Gabriel',
      salario: 7000,
      cargo: 'Dev Full Stack Pln'
  },
  {
      id: 8,
      nome: 'Arthur',
      salario: 6500,
      cargo: 'Dev Full Stack Pln'
  },
];

const visualizacao = document.getElementById('visualizacao');

const totalSalarios = colaboradores.reduce((acc, colaboradores) => acc += colaboradores.salario, 0);

const mediaSalarios = totalSalarios / colaboradores.length;

const totalSalariosCargo = colaboradores.reduce((acc, colaboradores) => {
  if (colaboradores.cargo === 'Dev Full Stack Jr') {
    acc.devFullStackJr += parseFloat(colaboradores.salario);
  } else if (colaboradores.cargo === 'Dev Full Stack Pln') {
    acc.devFullStackPln += colaboradores.salario;
  } else if (colaboradores.cargo === 'Dev Full Stack Snr') {
    acc.devFullStackSnr += colaboradores.salario;
  };

  return acc;

}, {devFullStackJr : 0, devFullStackPln : 0, devFullStackSnr : 0})

const quantidadeJr = colaboradores.filter((colaborador) => colaborador.cargo === 'Dev Full Stack Jr');
const quantidadePln = colaboradores.filter((colaborador) => colaborador.cargo === 'Dev Full Stack Pln');
const quantidadeSnr = colaboradores.filter((colaborador) => colaborador.cargo === 'Dev Full Stack Snr');


const mediaSalariosCargo = {
  devFullStackJr : totalSalariosCargo.devFullStackJr / quantidadeJr.length, 
  devFullStackPln : totalSalariosCargo.devFullStackPln / quantidadePln.length, 
  devFullStackSnr : totalSalariosCargo.devFullStackSnr / quantidadeSnr.length
}


visualizacao.innerHTML = `
<strong>Total Salarios:</strong> R$${totalSalarios.toFixed(2)} <br>
<strong>Media Salarios:</strong> R$${mediaSalarios.toFixed(2)} <br><br>
<strong>Total Salario Dev Full Stack Jr:</strong> R$${totalSalariosCargo.devFullStackJr.toFixed(2)} <br>
<strong>Media Salario Dev Full Stack Jr:</strong> R$${mediaSalariosCargo.devFullStackJr.toFixed(2)} <br><br>
<strong>Total Salario Dev Full Stack Pleno:</strong> R$${totalSalariosCargo.devFullStackPln.toFixed(2)} <br>
<strong>Media Salario Dev Full Stack Pleno:</strong> R$${mediaSalariosCargo.devFullStackPln.toFixed(2)} <br><br>
<strong>Total Salario Dev Full Stack Senior:</strong> R$${totalSalariosCargo.devFullStackSnr.toFixed(2)} <br>
<strong>Media Salario Dev Full Stack Senior:</strong> R$${mediaSalariosCargo.devFullStackSnr.toFixed(2)} <br>
`