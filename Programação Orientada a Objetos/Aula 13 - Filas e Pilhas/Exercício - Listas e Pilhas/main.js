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

mostrarItensEstoque = () => {
  let estoque = lerEstoque();

  console.log('-----Itens de Mercearia-----');
  for (item of estoque.EstoqueMercearia) {
    console.log(`Nome: ${item.Nome} Quantidade: ${item.Quantidade} Preço: ${item.Preço} Fabricante: ${item.Fabricante}`);
  }
  console.log('\n')
  console.log('-----Itens de Horti-Fruti-----');
  for (item of estoque.EstoqueHortiFruti) {
    console.log(`Nome: ${item.Nome} Quantidade: ${item.Quantidade} Preço: ${item.Preço} Produtor: ${item.Produtor}`);
  }
  console.log('\n');
}

while (opcao != 0) {
  console.log('1 - Adicione novo produto ao estoque');
  console.log('2 - Remova um produto do estoque');
  console.log('3 - Exportar estoques');
  console.log('4 - Realizar venda');
  console.log('5 - Mostrar produtos em estoque');
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

    const EstoqueMercearia = estoques.EstoqueMercearia;
    const EstoqueHortiFruti = estoques.EstoqueHortiFruti;
    
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

  } else if (opcao == 4) {
    console.log('-----Estoque disponível para venda-----\n');

    let estoque = lerEstoque();

    const EstoqueMercearia = estoque.EstoqueMercearia;
    const EstoqueHortiFruti = estoque.EstoqueHortiFruti;

    mostrarItensEstoque();

    nome = input.question('Insira o nome do item que deseja comprar: ');
    if (!nome) {
      console.log('Este item não está disponível!');
    }

    let indiceItemMercearia = EstoqueMercearia.findIndex((item) => item.Nome.toUpperCase() === nome.toUpperCase());
    let indiceItemHortiFruti = EstoqueHortiFruti.findIndex((item) => item.Nome.toUpperCase() === nome.toUpperCase());
    
    if (indiceItemMercearia === -1 && indiceItemHortiFruti === -1) {
      console.log('Este item não existe na lista de itens disponíveis!');
      nome = input.question('Insira novamente o nome do item que deseja comprar: ');
    }

    indiceItemMercearia = EstoqueMercearia.findIndex((item) => item.Nome.toUpperCase() === nome.toUpperCase());
    indiceItemHortiFruti = EstoqueHortiFruti.findIndex((item) => item.Nome.toUpperCase() === nome.toUpperCase());
    
    if (indiceItemMercearia === -1 && indiceItemHortiFruti === -1) {
      console.log('Item inválido, retornaremos ao menu principal: ')
    }


    if (indiceItemMercearia > -1) {
      console.log(`\n ${EstoqueMercearia[indiceItemMercearia].Nome} foi selecionado`);
      
      quantidade = input.question(`Insira a quantidade de ${EstoqueMercearia[indiceItemMercearia].Nome} que deseja comprar: `);
      
      while (quantidade > EstoqueMercearia[indiceItemMercearia].Quantidade) {
        quantidade = input.question('Não há itens o suficiente, insira uma quantidade válida: ');
      }

      EstoqueMercearia[indiceItemMercearia].Quantidade -= quantidade;


      if (EstoqueMercearia[indiceItemMercearia].Quantidade === 0) {
        EstoqueMercearia.splice(indiceItemMercearia, 1);
      }
    }
    if (indiceItemHortiFruti > -1) {
      console.log(`\n ${EstoqueHortiFruti[indiceItemHortiFruti].Nome} foi selecionado`);
      quantidade = input.question(`Insira a quantidade de ${EstoqueHortiFruti[indiceItemHortiFruti].Nome} que deseja comprar: `);
      
      while (quantidade > EstoqueHortiFruti[indiceItemHortiFruti].Quantidade) {
        quantidade = input.question('Não há itens o suficiente, insira uma quantidade válida: ');
      }

      EstoqueHortiFruti[indiceItemHortiFruti].Quantidade -= quantidade;


      if (EstoqueHortiFruti[indiceItemHortiFruti].Quantidade === 0) {
        EstoqueHortiFruti.splice(indiceItemHortiFruti, 1);
      }
    }

    exportarEstoque({EstoqueMercearia: EstoqueMercearia, EstoqueHortiFruti: EstoqueHortiFruti});

    console.log('Compra finalizada, volte sempre!');
  } else if (opcao == 5) {
    mostrarItensEstoque();
  }
}

console.log('\n');
console.log('Sistema finalizado!');
