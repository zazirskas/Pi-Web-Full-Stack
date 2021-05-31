const input = require("readline-sync");

const Atendente = require("./atendente");
const Cozinha = require("./cozinha");
const Caixa = require("./caixa");
const Salao = require("./salao");

const atendente = new Atendente();
const caixa = new Caixa();
const cozinha = new Cozinha();
const salao = new Salao();

let opcao, pedido, pedidoAPagar;
console.log(" --- Bem-vindo ao sistema de pedidos! ---");

while (opcao != 0) {
  if (opcao == 1) {
    console.log('---------------');
    console.log(' ')
    pedido = input.question('Insira o pedido do cliente: ');
    atendente.anotarPedido(pedido);
    console.log('---------------');
  } else if (opcao == 2) {
    console.log('---------------');
    atendente.mostrarPedidos();
    console.log('---------------');
  } else if (opcao == 3) {
    console.log('---------------');
    atendente.enviarPedido(cozinha);
    console.log('---------------');
  } else if (opcao == 4) {
    console.log('---------------');
    caixa.filaCaixa(atendente.fecharPedido(salao));
    console.log('---------------');
  } else if (opcao == 5) {
    console.log('---------------');
    cozinha.mostrarPedidos();
    console.log('---------------');
  } else if (opcao == 6) {
    console.log('---------------');
    salao.recebePedido(cozinha.terminarPedido());
    console.log('---------------');
  } else if (opcao == 7) {
    console.log('---------------');
    salao.mostrarPedidos();
    console.log('---------------');
  } else if (opcao == 8) {
    console.log('---------------');
    caixa.cobrarPedido(0);
    console.log('---------------');
  } else if (opcao == 9) {
    console.log('---------------');
    caixa.mostrarFila();
    console.log('---------------');
  }

  console.log('1 - Atendente - Anotar pedido');
  console.log('2 - Atendente - Mostrar pedidos anotados');
  console.log('3 - Atendente - Enviar pedido para cozinha');
  console.log('4 - Atendente - Fechar pedido do salão');
  console.log('5 - Cozinha - Mostrar pedidos sendo preparados na cozinha');
  console.log('6 - Cozinha - Terminar pedido e enviar ao salão');
  console.log('7 - Salão - Mostrar pedidos sendo consumidos no salão');
  console.log('8 - Caixa - Cobrar pedido');
  console.log('9 - Caixa - Mostrar fila do caixa');
  console.log('0 - SAIR');
  
	opcao = input.question("Insira a opção desejada: ");

}

