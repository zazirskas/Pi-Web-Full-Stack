class Produto {
  constructor(Nome, Quantidade, Preco) {
    let _nome = Nome;
    let _quantidade = Quantidade;
    let _preco = Preco;

    this.getNome = () => {
      return _nome;
    }

    this.setNome = (Nome) => {
      return _nome = Nome;
    }

    this.getQuantidade = () => {
      return _quantidade;
    }

    this.setQuantidade = (Quantidade) => {
      return _quantidade = Quantidade;
    }
    
    this.getPreco = () => {
      return _preco;
    }

    this.setPreco = (Preco) => {
      return _preco = Preco;
    }
  }

  get Nome() {
    return this.getNome();
  }

  set Nome(Nome) {
    return this.setNome(Nome);
  }

  get Quantidade() {
    return this.getQuantidade();
  }

  set Quantidade(Quantidade) {
    return this.setQuantidade(Quantidade);
  }

  get Preco() {
    return this.getPreco();
  }

  set Preco(Preco) {
    return this.setPreco(Preco);
  }
}

module.exports = Produto