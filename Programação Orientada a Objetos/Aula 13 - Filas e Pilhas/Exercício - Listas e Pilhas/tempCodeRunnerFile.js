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