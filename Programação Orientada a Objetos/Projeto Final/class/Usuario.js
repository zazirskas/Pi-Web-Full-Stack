const input = require('readline-sync');


class Usuario {
  constructor(nome, usuario, senha) {
    let _nome = nome;
    let _usuario = usuario;
    let _senha = senha;
    this.logado = false;

    this.getNome = () => {
      return _nome;
    }

    this.setNome = (nome) => {
      return _nome = nome;
    }

    this.getUsuario = () => {
      return _usuario;
    }

    this.setUsuario = (usuario) => {
      return _usuario = usuario;
    }

    this.getSenha = () => {
      return _senha;
    }

    this.setSenha = (senha) => {
      return _senha = senha;
    }
  }

  get nome() {
    return this.getNome();
  }

  set nome(nome) {
    return this.setNome(nome);
  }

  get usuario() {
    return this.getUsuario();
  }
  
  set usuario(usuario) {
    return this.setUsuario(usuario);
  }

  get senha() {
    return this.getSenha();
  }

  set senha(senha) {
    return this.setSenha(senha);
  }

  autenticacao(usuario, senha) {

    if ((usuario == this.usuario) && (senha == this.senha)) {
      console.log('Login realizado com sucesso!');

      return this.logado = true;
    };
  };
};

module.exports = Usuario


