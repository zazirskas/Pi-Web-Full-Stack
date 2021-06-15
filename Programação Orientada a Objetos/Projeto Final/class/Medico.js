const Usuario = require("./Usuario");
const {readDB, writeDB} = require('./funcionalidades');

class Medico extends Usuario {
  constructor(nome, usuario, senha, especialidade, agenda = undefined, tipo = 2) {

    super(nome, usuario, senha);
    let _tipo = tipo;
    let _especialidade = especialidade;
    let _agenda = agenda;
    

    this.getTipo = () => {
      return _tipo;
    };

    this.setTipo = (tipo) => {
      return _tipo = tipo;
    };

    this.getEspecialidade = () => {
      return _especialidade;
    };

    this.setEspecialidade = (especialidade) => {
      return _especialidade = especialidade;
    };

    this.getAgenda = () => {
      return _agenda;
    };

    this.setAgenda = (agenda) => {
      return _agenda = agenda;
    };
  };
  get tipo() {
    return this.getTipo();
  };

  set tipo(tipo) {
    return this.setTipo(tipo);
  };

  get especialidade() {
    return this.getEspecialidade();
  };

  set especialidade(especialidade) {
    return this.setEspecialidade(especialidade);
  };

  get agenda() {
    return this.getAgenda();
  };

  set agenda(agenda) {
    return this.setAgenda(agenda);
  };

  verAgenda() {
    let db = readDB();

    let atualizaAgenda = db.Clinica.find((pessoa) => pessoa.usuario === this.usuario);

    if (!atualizaAgenda.agenda) {
      return console.log('Não há nenhuma consulta marcada');
    }
    console.log(atualizaAgenda.agenda);
  };
};

module.exports = Medico;