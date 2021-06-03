const input = require('readline-sync');
const {lerEstoque, exportarEstoque} = require('./funcionalidades');   
 
class Venda {
  constructor(EstoqueMercearia = [], EstoqueHortiFruti = []) {
    this.EstoqueMercearia = EstoqueMercearia;
    this.EstoqueHortiFruti = EstoqueHortiFruti;
  }

  adicionarProdutos() {
    console.log('-----Itens de Mercearia-----');
    let item;

    for (item of this.EstoqueMercearia) {
      console.log(`Nome: ${item.Nome} Quantidade: ${item.Quantidade} Preço: ${item.Preço} Fabricante: ${item.Fabricante}`);
    }
    console.log('\n')
    console.log('-----Itens de Horti-Fruti-----');
    for (item of this.EstoqueHortiFruti) {
      console.log(`Nome: ${item.Nome} Quantidade: ${item.Quantidade} Preço: ${item.Preço} Produtor: ${item.Produtor}`);
    }
    console.log('\n');
  }

  realizarVenda() {
    console.log('-----Estoque disponível para venda-----\n');

    this.adicionarProdutos();

    let nome = input.question('Insira o nome do item que deseja comprar: ');

    if (!nome) {
      console.log('Este item não está disponível!');
    }

    let indiceItemMercearia = this.EstoqueMercearia.findIndex((item) => item.Nome.toUpperCase() === nome.toUpperCase());
    let indiceItemHortiFruti = this.EstoqueHortiFruti.findIndex((item) => item.Nome.toUpperCase() === nome.toUpperCase());
    
    if (indiceItemMercearia === -1 && indiceItemHortiFruti === -1) {
      console.log('Este item não existe na lista de itens disponíveis!');
      nome = input.question('Insira novamente o nome do item que deseja comprar: ');
    }

    indiceItemMercearia = this.EstoqueMercearia.findIndex((item) => item.Nome.toUpperCase() === nome.toUpperCase());
    indiceItemHortiFruti = this.EstoqueHortiFruti.findIndex((item) => item.Nome.toUpperCase() === nome.toUpperCase());
    
    if (indiceItemMercearia === -1 && indiceItemHortiFruti === -1) {
      console.log('Item inválido, retornaremos ao menu principal: ')
    }


    if (indiceItemMercearia > -1) {
      console.log(`\n ${this.EstoqueMercearia[indiceItemMercearia].Nome} foi selecionado`);

      let quantidade = input.question(`Insira a quantidade de ${this.EstoqueMercearia[indiceItemMercearia].Nome} que deseja comprar: `);
      
      while (quantidade > this.EstoqueMercearia[indiceItemMercearia].Quantidade) {
        quantidade = input.question('Não há itens o suficiente, insira uma quantidade válida: ');
      }

      this.EstoqueMercearia[indiceItemMercearia].Quantidade -= quantidade;


      if (this.EstoqueMercearia[indiceItemMercearia].Quantidade === 0) {
        this.EstoqueMercearia.splice(indiceItemMercearia, 1);
      }
    }
    if (indiceItemHortiFruti > -1) {
      console.log(`\n ${this.EstoqueHortiFruti[indiceItemHortiFruti].Nome} foi selecionado`);
      quantidade = input.question(`Insira a quantidade de ${this.EstoqueHortiFruti[indiceItemHortiFruti].Nome} que deseja comprar: `);
      
      while (quantidade > this.EstoqueHortiFruti[indiceItemHortiFruti].Quantidade) {
        quantidade = input.question('Não há itens o suficiente, insira uma quantidade válida: ');
      }

      this.EstoqueHortiFruti[indiceItemHortiFruti].Quantidade -= quantidade;


      if (this.EstoqueHortiFruti[indiceItemHortiFruti].Quantidade === 0) {
        this.EstoqueHortiFruti.splice(indiceItemHortiFruti, 1);
      }
    }

    exportarEstoque({EstoqueMercearia: this.EstoqueMercearia, EstoqueHortiFruti: this.EstoqueHortiFruti});

    console.log('Compra finalizada, volte sempre!');
  }
}

module.exports = Venda