const Produto = require(`./Produto`);
const ProdutoHortiFruti = require(`./ProdutoHortiFruti`);
const ProdutoMercearia = require(`./ProdutoMercearia`);
const Estoque = require(`./Estoque`);
const Venda = require('./Venda');
const input = require(`readline-sync`);
const {lerEstoque, exportarEstoque} = require('./funcionalidades')

const estoqueHortiFruti = new Estoque();
const estoqueMercearia = new Estoque();

let opcao, opcao2, nome, quantidade, preco, fornecedor;

console.log('Bem vindo ao sistema de estoque!');

const mostrarItensEstoque = () => {
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

      console.log(`Exporte para confirmar adição ao estoque de Horti Fruti`)

      console.log('---- Novos itens de Horti Fruti a incluir ----');

      estoqueHortiFruti.mostrarEstoqueAExportar();

    } else if (opcao2 == 2) {
      nome = input.question('Insira o nome do produto: ');
      quantidade = input.question('Insira a quantidade do produto: ');
      preco = input.question('Insira o preço do produto: ');
      fornecedor = input.question('Insira o fabricante do produto: ')

      estoqueMercearia.adicionarProduto(new ProdutoMercearia(nome, quantidade, preco, fornecedor));

      console.log(`Exporte para confirmar adição ao estoque de Mercearia`)

      console.log('---- Novos itens de Mercearia a incluir ----');

      estoqueMercearia.mostrarEstoqueAExportar();
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
      const novoItem = {Nome: item.nome, Quantidade: item.quantidade, Preço: parseFloat(item.preco).toFixed(2), Fabricante: item.fabricante}
      EstoqueMercearia.push(novoItem);
    }
    
    for (item of estoqueHortiFruti.listaProdutos) {
      const novoItem = {Nome: item.nome, Quantidade: item.quantidade, Preço: parseFloat(item.preco).toFixed(2), Produtor: item.produtor}
      EstoqueHortiFruti.push(novoItem);
    }
    
    exportarEstoque({EstoqueMercearia: EstoqueMercearia, EstoqueHortiFruti: EstoqueHortiFruti});
    console.log('Estoques exportados com sucesso!'); 

  } else if (opcao == 4) {
    let estoque = lerEstoque();

    const venda = new Venda(estoque.EstoqueMercearia, estoque.EstoqueHortiFruti);

    venda.realizarVenda();

  } else if (opcao == 5) {
    mostrarItensEstoque();
  }
}

console.log('\n');
console.log('Sistema finalizado!');