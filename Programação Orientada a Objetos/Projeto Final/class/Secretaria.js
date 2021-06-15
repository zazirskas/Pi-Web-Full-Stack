const Usuario = require("./Usuario");
const {readDB, writeDB} = require('./funcionalidades');
const input = require('readline-sync');
const Agenda = require("./Agenda");
const Medico = require("./Medico");

class Secretaria extends Usuario {
  constructor(nome, usuario, senha, tipo = 1) {
    super(nome, usuario, senha);

    let _tipo = tipo;

    this.getTipo = () => {
      return _tipo;
    };

    this.setTipo = (tipo) => {
      return _tipo = tipo;
    };
  };

  get tipo() {
    return this.getTipo();
  };

  set tipo(tipo) {
    return this.setTipo(tipo);
  };

  verMedicos() {
    let db = readDB();
    let funcionario;
    let contTipo = 0;

    for (funcionario of db.Clinica) {
      if (funcionario.tipo === 2) {
        contTipo += 1;
        let indiceMedico = db.Clinica.findIndex((pessoa) => pessoa.usuario === funcionario.usuario);
        console.log(`${indiceMedico} - Nome: ${funcionario.nome} Usuario: ${funcionario.usuario} Especialidade: ${funcionario.especialidade}`);
      };
    };

    if (contTipo == 0) {
      return console.log('Não há nenhum médico no sistema');
    };
  };

  acessaAgenda(agendaObj) {
    let db = readDB();
    
    let medico = input.question('Digite o número do médico que deseja acessar a agenda: ');

    if (!db.Clinica[medico] || !db.Clinica[medico].agenda) {
      return console.log('Esta agenda não existe!');
    };

    console.log(db.Clinica[medico].agenda);

    let pergunta = input.question('Deseja adicionar um agendamento? (s/n): ');

    if (pergunta === 's') {

      let pessoa = {
        nome: db.Clinica[medico].nome,
        usuario: db.Clinica[medico].usuario,
        senha: db.Clinica[medico].senha,
        especialidade: db.Clinica[medico].especialidade,
        agenda: db.Clinica[medico].agenda,
      };

      let usuario = new Medico(pessoa.nome, pessoa.usuario, pessoa.senha, pessoa.especialidade, pessoa.agenda);

      this.alterarAgenda(agendaObj, usuario);
    }
  };

  alterarAgenda(agendaObj, usuario) {
      const ano = 2021;
      let mes, dia, hora, minuto;
      const segundo = 0;
  
      mes = input.question('Insira o número do mês em que a consulta será realizada: ');
      dia = input.question('Insira o dia do mês em que a consulta será realizada: ');
      hora = input.question('Insira a hora do dia em que a consulta será realizada: ');
      minuto = input.question('Insira os minutos da hora em que a consulta será realizada: ');
  
      const agendamento = new Date(ano, mes-1, dia, hora-3, minuto);
  

      return agendaObj.adicionaAgendamento(agendamento, usuario);
  };
}

module.exports = Secretaria;