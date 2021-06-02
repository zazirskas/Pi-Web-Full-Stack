const Produto = require('./Produto')

class ProdutoMercearia extends Produto {
  constructor(nome, quantidade, preco, fabricante, dataValidade = "31/12/2021") {
    super(nome, quantidade, preco);
    let _fabricante = fabricante;
    let _dataValidade = dataValidade;
    
    this.getFabricante = () => {
      return _fabricante;
    }

    this.setFabricante = (fabricante) => {
      return _fabricante = fabricante;
    }

    this.getDataValidade = () => {
      return _dataValidade;
    }

    this.setDataValidade = (dataValidade) => {
      return _dataValidade = dataValidade;
    }
  }

  get fabricante() {
    return this.getFabricante();
  }

  set fabricante(fabricante) {
    return this.setFabricante(fabricante);
  }

  get dataValidade() {
    return this.getDataValidade();
  }

  set dataValidade(dataValidade) {
    return this.setDataValidade(dataValidade);
  }
}

module.exports = ProdutoMercearia;