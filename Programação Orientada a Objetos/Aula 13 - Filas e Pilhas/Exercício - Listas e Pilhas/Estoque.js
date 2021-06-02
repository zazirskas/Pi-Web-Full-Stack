class Estoque {
  constructor(listaProdutos = []) {
    let _listaProdutos = listaProdutos

    this.getListaProdutos = () => {
      return _listaProdutos;
    }

    this.setListaProdutos = (listaProdutos) => {
      return _listaProdutos = listaProdutos
    }
  }

  get listaProdutos() {
    return this.getListaProdutos();
  }

  set listaProdutos(listaProdutos) {
    return  this.setListaProdutos(listaProdutos);
  }

  adicionarProduto(produto) {
    this.listaProdutos = [produto, ...this.listaProdutos];

    return this.listaProdutos;
  }

  removerProduto() {
    const [produtoRemovido, ...restoProdutos] = this.listaProdutos

    this.listaProdutos = restoProdutos;

    console.log(`${produtoRemovido.nome} removido do estoque com sucesso!`)

    return this.listaProdutos
  }

  mostrarEstoque() {
    let item;
    for (item of this.listaProdutos) {
      if (item.produtor) {
        console.log(`Nome: ${item.nome} Quantidade: ${item.quantidade} Preço: R$${parseInt(item.preco).toFixed(2)} Produtor: ${item.produtor}`);
      } else if (item.fabricante) {
        console.log(`Nome: ${item.nome} Quantidade: ${item.quantidade} Preço: R$${parseInt(item.preco).toFixed(2)} Fabricante: ${item.fabricante}`);
      }
    }
    console.log('---- Fim estoque ----');
  }
}

module.exports = Estoque