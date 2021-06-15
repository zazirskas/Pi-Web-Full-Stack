const input = require('readline-sync');
const {readDB, writeDB} = require('./funcionalidades');

class Agenda {
  constructor(listaAgendamento = []) {
    let _listaAgendamento = listaAgendamento;

    this.getListaAgendamento = () => {
      return _listaAgendamento;
    }

    this.setListaAgendamento = (listaAgendamento) => {
      return _listaAgendamento = listaAgendamento;
    }
  }

  get listaAgendamento() {
    return this.getListaAgendamento();
  }

  set listaAgendamento(listaAgendamento) {
    return this.setListaAgendamento(listaAgendamento);
  }

  adicionaAgendamento(agendamento, usuario) {

    let db = readDB();

    let atualizaAgenda = db.Clinica.find((pessoa) => pessoa.usuario === usuario.usuario);
    let posicaoUsuario = db.Clinica.findIndex((pessoa) => pessoa.usuario === usuario.usuario);

    if (!db.Clinica) {
      writeDB({...db, Clinica: []});
    } else {

      db = readDB();

      this.listaAgendamento = atualizaAgenda.agenda;

      console.log(this.listaAgendamento);

      let listaOrdenada = this.listaAgendamento.sort();
      
      const validacao = listaOrdenada.map((horario) => Date.parse(agendamento) - Date.parse(horario));
      

      console.log('Agendamento adicionado com sucesso;');

      for (let milisegundos of validacao) {
        let minutos = Math.floor(milisegundos / 60000);
        if ((minutos < 30 && minutos > -30)) {
          return console.log('Um agendamento deve ter no mínimo 30 minutos entre um e outro que é o tempo da consulta!');
        };
      };
      
      this.listaAgendamento = [...this.listaAgendamento, agendamento];

      listaOrdenada = this.listaAgendamento.sort();

      db.Clinica[posicaoUsuario].agenda = listaOrdenada;

      writeDB({...db, Clinica: db.Clinica});
    };

  };

  formataAgendamento() {
    const ano = 2021;
    let mes, dia, hora, minuto;
    const segundo = 0;

    mes = input.question('Insira o número do mês em que a consulta será realizada: ');
    dia = input.question('Insira o dia do mês em que a consulta será realizada: ');
    hora = input.question('Insira a hora do dia em que a consulta será realizada: ');
    minuto = input.question('Insira os minutos da hora em que a consulta será realizada: ');

    const agendamento = new Date(ano, mes-1, dia, hora-3, minuto);


    return agendamento;
  }
};

module.exports = Agenda;