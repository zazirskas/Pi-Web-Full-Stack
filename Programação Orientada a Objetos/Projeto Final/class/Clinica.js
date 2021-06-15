const { read } = require('fs');
const {readDB, writeDB} = require('./funcionalidades');

class Clinica {
  constructor(usuarios = []) {
    let _usuarios = usuarios;

    this.getUsuarios = () => {
      return _usuarios;
    }

    this.setUsuarios = (usuarios) => {
      return _usuarios = usuarios;
    }
  }

  get usuarios() {
    return this.getUsuarios();
  }

  set usuarios(usuarios) {
    return this.setUsuarios(usuarios);
  }

  adicionaUsuario(novoUsuario) {
    let db = readDB();

    if (!db.Clinica) {
      writeDB({Clinica: []});
    }

    if (novoUsuario.tipo === 1) {
      db = readDB();

      this.usuarios = db.Clinica;

      const inserirUsuario = {
        nome: novoUsuario.nome,
        usuario: novoUsuario.usuario,
        senha: novoUsuario.senha,
        tipo: novoUsuario.tipo
      }

      this.usuarios = [...this.usuarios, inserirUsuario];

      writeDB({...db, Clinica: this.usuarios});
    }

    if (novoUsuario.tipo === 2) {
      db = readDB();
      this.usuarios = db.Clinica

      const inserirUsuario = {
        nome: novoUsuario.nome,
        usuario: novoUsuario.usuario,
        senha: novoUsuario.senha,
        especialidade: novoUsuario.especialidade,
        agenda: novoUsuario.agenda,
        tipo: novoUsuario.tipo
      }

      this.usuarios = [...this.usuarios, inserirUsuario];

      writeDB({...db, Clinica: this.usuarios});
    }
  }
}

module.exports = Clinica;