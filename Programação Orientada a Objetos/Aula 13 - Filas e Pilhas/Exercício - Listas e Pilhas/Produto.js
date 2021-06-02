class Produto {
  constructor(nome, quantidade, preco) {
    let _nome = nome;
    let _quantidade = quantidade;
    let _preco = preco;

    this.getNome = () => {
      return _nome;
    }

    this.setNome = (nome) => {
      return _nome = nome;
    }

    this.getQuantidade = () => {
      return _quantidade;
    }

    this.setQuantidade = (quantidade) => {
      return _quantidade = quantidade;
    }
    
    this.getPreco = () => {
      return _preco;
    }

    this.setPreco = (preco) => {
      return _preco = preco;
    }
  }

  get nome() {
    return this.getNome();
  }

  set nome(nome) {
    return this.setNome(nome);
  }

  get quantidade() {
    return this.getQuantidade();
  }

  set quantidade(quantidade) {
    return this.setQuantidade(quantidade);
  }

  get preco() {
    return this.getPreco();
  }

  set preco(preco) {
    return this.setPreco(preco);
  }
}

module.exports = Produto