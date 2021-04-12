const usuarios = [
  {
      id: 1,
      nome: 'Nathan',
      idade: 28,
      email: 'nathan@gmail.com',
      senha: '1234'
  },
  {
      id: 2,
      nome: 'Alan',
      idade: 30,
      email: 'alan@gmail.com',
      senha: '4321'
  },
  {
      id: 3,
      nome: 'Alberto',
      idade: 35,
      email: 'alberto@gmail.com',
      senha: '7263'
  },
  {
      id: 4,
      nome: 'Jeferson',
      idade: 25,
      email: 'jeferson@gmail.com',
      senha: '5242'
  },
];

const emailUsuario = document.getElementById('emailUsuario');
const senhaUsuario = document.getElementById('senhaUsuario');
const resultado = document.getElementById('resultado');


const login = (email, senha) => {
  const validacao = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);
  console.log(validacao);
  if (!validacao) {
    resultado.innerText = 'Usuário ou senha inválido, tente novamente';
  } else {
    resultado.innerText = `Login efetuado com sucesso, bem vindo ${validacao.nome}`;
  }
}