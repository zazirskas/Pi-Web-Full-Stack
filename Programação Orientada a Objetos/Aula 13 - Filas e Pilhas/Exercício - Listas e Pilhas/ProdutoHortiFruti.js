const Produto = require('./Produto')

class ProdutoHortiFruti extends Produto {
  constructor(nome, quantidade, preco, produtor) {
    super(nome, quantidade, preco)
    let _produtor = produtor;

    this.getProdutor = () => {
      return _produtor;
    }

    this.setProdutor = (produtor) => {
      return _produtor = produtor;
    }
  }

  get produtor() {
    return this.getProdutor();
  }

  set produtor(produtor) {
    return this.setProdutor(produtor);
  }
}

module.exports = ProdutoHortiFruti;