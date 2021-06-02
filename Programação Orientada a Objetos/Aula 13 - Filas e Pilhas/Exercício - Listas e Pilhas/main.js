const Produto = require(`./Produto`);
const ProdutoHortiFruti = require(`./ProdutoHortiFruti`);
const ProdutoMercearia = require(`./ProdutoMercearia`);
const Estoque = require(`./Estoque`);
const input = require(`readline-sync`);
const {lerEstoque, exportarEstoque} = require('./funcionalidades')

const estoqueHortiFruti = new Estoque();
const estoqueMercearia = new Estoque();

let opcao, opcao2, nome, quantidade, preco, fornecedor;

console.log('Bem vindo ao sistema de estoque!');

while (opcao != 0) {
  console.log('1 - Adicione novo produto ao estoque');
  console.log('2 - Remova um produto do estoque');
  console.log('3 - Exportar estoques');
  console.log('0 - Sair');

  opcao = input.question('Insira a opção desejada: ')

  if (opcao == 1) {
    console.log('--------------');
    console.log('1 - Adicione um novo produto ao Estoque de Horti-Fruti');
    console.log('2 - Adicione novo produto ao Estoque de Mercearia');

    opcao2 = input.question('Insira a opção desejada: ');

    console.log('--------------');
    if (opcao2 == 1) {
      nome = input.question('Insira o nome do produto: ');
      quantidade = input.question('Insira a quantidade do produto: ');
      preco = input.question('Insira o preço do produto: ');
      fornecedor = input.question('Insira o produtor do produto: ')

      estoqueHortiFruti.adicionarProduto(new ProdutoHortiFruti(nome, quantidade, preco, fornecedor));

      console.log(`Produto adicionado com sucesso!`)

      console.log('---- Estoque de Horti Fruti atual ----');

      estoqueHortiFruti.mostrarEstoque();

    } else if (opcao2 == 2) {
      nome = input.question('Insira o nome do produto: ');
      quantidade = input.question('Insira a quantidade do produto: ');
      preco = input.question('Insira o preço do produto: ');
      fornecedor = input.question('Insira o fabricante do produto: ')

      estoqueMercearia.adicionarProduto(new ProdutoMercearia(nome, quantidade, preco, fornecedor));

      console.log(`Produto adicionado com sucesso!`)

      console.log('---- Estoque de Mercearia atual ----');

      estoqueMercearia.mostrarEstoque();
    }
  } else if (opcao == 2) {
    console.log('--------------');
    console.log('1 - Remove um produto ao Estoque de Horti-Fruti');
    console.log('2 - Remove produto ao Estoque de Mercearia');

    opcao2 = input.question('Insira a opção desejada: ');

    console.log('--------------');

    if (opcao2 == 1) {
      estoqueHortiFruti.removerProduto();
      console.log('Estoque de Horti Fruti atualizado');
      estoqueHortiFruti.mostrarEstoque();

    } else if (opcao2 == 2) {
      estoqueMercearia.removerProduto();
      console.log('Estoque de Mercearia atualizado');
      estoqueMercearia.mostrarEstoque();
    }
  } else if (opcao == 3) {
    
    console.log('--------------');
    let estoques = lerEstoque();
    const EstoqueMercearia = []
    const EstoqueHortiFruti = []
    
    for (item of estoqueMercearia.listaProdutos) {
      const novoItem = {Nome: item.nome, Quantidade: item.quantidade, Preço: parseInt(item.preco).toFixed(2), Fabricante: item.fabricante}
      EstoqueMercearia.push(novoItem);
    }
    
    for (item of estoqueHortiFruti.listaProdutos) {
      const novoItem = {Nome: item.nome, Quantidade: item.quantidade, Preço: parseInt(item.preco).toFixed(2), Produtor: item.produtor}
      EstoqueHortiFruti.push(novoItem);
    }
    
    exportarEstoque({EstoqueMercearia: EstoqueMercearia, EstoqueHortiFruti: EstoqueHortiFruti});
    console.log('Estoques exportados com sucesso!');
  }
}

console.log('Sistema finalizado!');
