const produtos = [];
let menu, recebeProduto;


while (menu !== 'b') {
  menu = prompt('Insira a opção desejada: \n (a) Adicionar um produto \n (b) Sair');
  if (menu === 'a') {
    console.log('Lista atual: ', produtos);
    recebeProduto = prompt('Insira o produto que deseja adicionar na lista: ');
    produtos.push(recebeProduto);
    console.log('Lista atualizada: ', produtos);
  }
}

console.log('Lista final: ', produtos);