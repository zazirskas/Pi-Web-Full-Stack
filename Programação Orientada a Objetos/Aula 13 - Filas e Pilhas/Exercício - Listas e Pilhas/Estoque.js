const { lerDB, escreverDB } = require("./funcionalidades");

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

  removerProduto(opcao) {
    let estoqueAtual = lerDB()

    if (opcao == 1) {
      const [produtoRemovido, ...restoProdutos] = estoqueAtual.EstoqueHortiFruti
  
      estoqueAtual.EstoqueHortiFruti = restoProdutos;
  
      console.log(`${produtoRemovido.Nome} removido do estoque com sucesso!`)

    } else if (opcao == 2) {

      const [produtoRemovido, ...restoProdutos] = estoqueAtual.EstoqueMercearia
  
      estoqueAtual.EstoqueMercearia = restoProdutos;
  
      console.log(`${produtoRemovido.Nome} removido do estoque com sucesso!`)
    }

    this.atualizarEstoque(estoqueAtual.EstoqueMercearia, estoqueAtual.EstoqueHortiFruti);
  }

  mostrarEstoqueAExportar() {
    let item;
    for (item of this.listaProdutos) {
      if (item.Produtor) {
        console.log(`Nome: ${item.Nome} Quantidade: ${item.Quantidade} Preço: R$${parseFloat(item.Preco).toFixed(2)} Produtor: ${item.Produtor}`);
      } else if (item.Fabricante) {
        console.log(`Nome: ${item.Nome} Quantidade: ${item.Quantidade} Preço: R$${parseFloat(item.Preco).toFixed(2)} Fabricante: ${item.Fabricante}`);
      }
    }
    console.log('---- Fim relatório de inclusão ----');  
  }

  atualizarEstoque(estoqueMercearia, estoqueHortiFruti) {
    console.log('--------------');
    let estoques = lerDB();
    let item;

    const EstoqueMercearia = [];
    const EstoqueHortiFruti = [];
    
    for (item of estoqueMercearia) {
      const novoItem = {Nome: item.Nome, Quantidade: item.Quantidade, Preco: parseFloat(item.Preco).toFixed(2), Fabricante: item.Fabricante}
      EstoqueMercearia.push(novoItem);
    }
    
    for (item of estoqueHortiFruti) {
      const novoItem = {Nome: item.Nome, Quantidade: item.Quantidade, Preco: parseFloat(item.Preco).toFixed(2), Produtor: item.Produtor}
      EstoqueHortiFruti.push(novoItem);
    }
    
    escreverDB({EstoqueMercearia: EstoqueMercearia, EstoqueHortiFruti: EstoqueHortiFruti});

    console.log('Estoques atualizados com sucesso!');
  }

  exportarEstoque(estoqueMercearia, estoqueHortiFruti) {
    console.log('--------------');
    let estoques = lerDB();
    let item;

    const EstoqueMercearia = estoques.EstoqueMercearia;
    const EstoqueHortiFruti = estoques.EstoqueHortiFruti;
    
    for (item of estoqueMercearia) {
      const novoItem = {Nome: item.Nome, Quantidade: item.Quantidade, Preco: parseFloat(item.Preco).toFixed(2), Fabricante: item.Fabricante}
      EstoqueMercearia.push(novoItem);
    }
    
    for (item of estoqueHortiFruti) {
      const novoItem = {Nome: item.Nome, Quantidade: item.Quantidade, Preco: parseFloat(item.Preco).toFixed(2), Produtor: item.Produtor}
      EstoqueHortiFruti.push(novoItem);
    }
    
    escreverDB({EstoqueMercearia: EstoqueMercearia, EstoqueHortiFruti: EstoqueHortiFruti});

    console.log('Estoques atualizados com sucesso!');
  }
}

module.exports = Estoque