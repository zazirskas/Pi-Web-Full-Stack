class Colaborador {
  constructor(nome, email, senha, listaPontos = []) {
    let _nome = nome;
    let _email = email;
    let _senha = senha;
    let _listaPontos = listaPontos;

    this.getNome = () => {
      return _nome;
    };

    this.setNome = (nome) => {
      return _nome = nome;
    };

    this.getEmail = () => {
      return _email;
    };

    this.setEmail = (email) => {
      return _email = email;
    };

    this.getSenha = () => {
      return _senha
    };

    this.setSenha = (senha) => {
      return _senha = senha;
    };

    this.getListaPontos = () => {
      return _listaPontos;
    };

    this.setListaPontos = (listaPontos) => {
      return _listaPontos = listaPontos;
    };
  };

  get nome() {
    return this.getNome();
  };

  set nome(nome) {
    return this.setNome(nome);
  };

  get email() {
    return this.getEmail();
  };

  set email(email) {
    return this.setEmail(email);
  };

  get senha() {
    return this.getSenha();
  };

  set senha(senha) {
    return this.setSenha(senha);
  };

  get listaPontos() {
    return this.getListaPontos();
  };

  set listaPontos(listaPontos) {
    return this.setListaPontos(listaPontos);
  };

  registrarPonto(ponto) {
    this.listaPontos.push({entrada: ponto.entrada, saida: ponto.saida, horasTrabalhadas: ponto.horasTrabalhadas});
    console.log('Ponto registrado com sucesso!');
  };
};

module.exports = Colaborador;