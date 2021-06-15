const Ponto = require('./Ponto');
const Colaborador = require('./Colaborador')
const BancoHoras = require('./BancoHoras');
const {readDB, writeDB} = require('./funcionalidades');
const input = require('readline-sync');

const banco = new BancoHoras();

console.log('Bem vindo ao sistema de pontos da Hello-World S.A.');

let opcao, usuario;

while (opcao != 0) {

  if (!usuario) {
    usuario = banco.login();
  };

  if (usuario) {
    console.log('----MENU----');
    console.log('1 - Bater Ponto de entrada');
    console.log('2 - Visualizar Pontos');
    console.log('0 - SAIR');
    console.log('------------');

    opcao = input.question('Insira a Opção desejada: ');

    if (opcao == 0) {
      return console.log('Sistema finalizado!')
    }

    if (opcao == 1) {
      let ponto = new Ponto();

      const lista = readDB();
      console.log(lista);
      ponto.baterPonto();
      
      let funcionarioLogado = new Colaborador(usuario.nome, usuario.email, usuario.senha, usuario.listaPontos);
      
      funcionarioLogado.registrarPonto(ponto);
      
      lista[usuario.id] = {
        nome: funcionarioLogado.nome,
				email: funcionarioLogado.email,
        senha: funcionarioLogado.senha,
				pontos: funcionarioLogado.listaPontos
      };

      console.log(lista);

      // writeDB({Funcionarios: lista});
    }
  };


}