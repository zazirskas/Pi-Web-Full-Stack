const Produto = require('./Produto')

class ProdutoMercearia extends Produto {
  constructor(Nome, Quantidade, Preco, Fabricante, dataValidade = "31/12/2021") {
    super(Nome, Quantidade, Preco);
    let _fabricante = Fabricante;
    let _dataValidade = dataValidade;

    this.getFabricante = () => {
      return _fabricante;
    }

    this.setFabricante = (Fabricante) => {
      return _fabricante = Fabricante;
    }

    this.getDataValidade = () => {
      return _dataValidade;
    }

    this.setDataValidade = (dataValidade) => {
      return _dataValidade = dataValidade;
    }
  }

  get Fabricante() {
    return this.getFabricante();
  }

  set Fabricante(Fabricante) {
    return this.setFabricante(Fabricante);
  }

  get dataValidade() {
    return this.getDataValidade();
  }

  set dataValidade(dataValidade) {
    return this.setDataValidade(dataValidade);
  }
}

module.exports = ProdutoMercearia;