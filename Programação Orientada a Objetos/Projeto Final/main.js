const Secretaria = require ('./class/Secretaria');
const Medico = require ('./class/Medico');
const Agenda = require('./class/Agenda');
const Clinica = require('./class/Clinica');
const input = require('readline-sync');
const {readDB} = require('./class/funcionalidades');



const clinica = new Clinica();

const agenda = new Agenda();

console.log('----Sistema de agendamento Clinica da Familia----');

let opcao;

while(opcao != 0) {
  console.log('1 - Login');
  console.log('2 - Criar usuário');
  console.log('0 - Sair');

  opcao = input.question('Insira a opção desejada: ');

  if (opcao == 1) {
    let usuario = input.question('Digite seu Login: ');
    let chave = input.question('Digite sua senha: ');

    let db = readDB();

    let autenticando = db.Clinica.find((pessoa) => (pessoa.usuario == usuario) && (pessoa.senha == chave));

    if (!autenticando) {
      return console.log('Usuário não encontrado, crie um usúario');

    } else if (autenticando.tipo === 2) {
      let userLogado = new Medico(autenticando.nome, autenticando.usuario, autenticando.senha, autenticando.especialidade, autenticando.agenda);
      userLogado.autenticacao(usuario, chave);
      
      while (opcao != 0) {
        console.log('-------------');
        console.log('1 - Ver agenda');
        console.log('2 - Adicionar agendamento');
        console.log('0 - Sair');
        console.log('----');

        opcao = input.question('Insira a opção desejada: ');

        if (opcao == 1) {
          userLogado.verAgenda();

        } else if (opcao == 2) {
          let agendamento = agenda.formataAgendamento();
          agenda.adicionaAgendamento(agendamento, userLogado);
        };
      };



    } else if (autenticando.tipo === 1) {
      let userLogado = new Secretaria(autenticando.nome, autenticando.usuario, autenticando.senha);
      
      userLogado.autenticacao(usuario, chave);

      while (opcao != 0) {
        console.log('-------------')
        console.log('1 - Ver médicos');
        console.log('2 - Acessar agenda');
        console.log('0 - Sair');
        opcao = input.question('Insira a opção desejada: ');
        console.log('-------');

        if (opcao == 1) {
          userLogado.verMedicos();
          console.log('---------');
        } else if (opcao == 2) {
          userLogado.acessaAgenda(agenda);
        }
      };
    };

  } else if (opcao == 2) {
    console.log('-----');
    console.log('Selecione o tipo de usuário que deseja criar: ');
    console.log('1 - Secrataria');
    console.log('2 - Médico');
    console.log('3 - Voltar');
    console.log('0 - Sair');

    opcao = input.question('Insira a opção desejada: ');

    if (opcao == 1) {
      let nome, usuario, senha;
      nome = input.question('Insira o nome do usuário: ');
      usuario = input.question('Insira o Login do usuário: ');
      senha = input.question('Insira a Senha do usuário: ');

      let novoUsuario = new Secretaria(nome, usuario, senha);

      clinica.adicionaUsuario(novoUsuario);

      console.log('Usuário criado com sucesso!');

    } else if (opcao == 2) {
      let nome, usuario, senha, especialidade, agenda;
      nome = input.question('Insira o nome do usuário: ');
      usuario = input.question('Insira o Login do usuário: ');
      senha = input.question('Insira a Senha do usuário: ');
      especialidade = input.question('Insira a especialidade do médico: ');
      agenda = [];

      let novoUsuario = new Medico(nome, usuario, senha, especialidade, agenda);

      clinica.adicionaUsuario(novoUsuario);

      console.log('Usuário criado com sucesso!');

    };
  };
};