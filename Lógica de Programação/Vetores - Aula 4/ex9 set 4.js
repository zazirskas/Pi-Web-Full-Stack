const lista = [1, 2, 3, 10, 20, 30, 50, 110];

let busca, indexBusca;

busca = parseInt(prompt('Insira um número para buscar na lista: '));
indexBusca = lista.indexOf(busca);

if (indexBusca === -1) {
  console.log('Esse número não foi encontrado, tente novamente');
  }
  else console.log(`O número digitado encontra-se no índice: ${indexBusca}`);
