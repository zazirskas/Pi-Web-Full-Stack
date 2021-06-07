const Produto = require('./Produto')

class ProdutoHortiFruti extends Produto {
  constructor(Nome, Quantidade, Preco, Produtor) {
    super(Nome, Quantidade, Preco)
    let _produtor = Produtor;

    this.getProdutor = () => {
      return _produtor;
    }

    this.setProdutor = (Produtor) => {
      return _produtor = Produtor;
    }
  }

  get Produtor() {
    return this.getProdutor();
  }

  set Produtor(Produtor) {
    return this.setProdutor(Produtor);
  }
}

module.exports = ProdutoHortiFruti;