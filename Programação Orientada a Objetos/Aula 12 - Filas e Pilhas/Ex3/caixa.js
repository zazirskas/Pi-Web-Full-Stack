class Caixa {
  constructor(pedidosACobrar = []) {
    let _pedidosACobrar = pedidosACobrar;

    this.getPedidosACobrar = () => {
      return _pedidosACobrar;
    }

    this.setPedidosACobrar = (pedidosACobrar) => {
      return _pedidosACobrar = pedidosACobrar;
    }
  }

  get pedidosACobrar() {
    return this.getPedidosACobrar();
  }

  set pedidosACobrar(pedidosACobrar) {
    return this.setPedidosACobrar(pedidosACobrar);
  }

  filaCaixa(pedidoFechado) {

    if (!pedidoFechado) {

    } else {
      this.pedidosACobrar = [...this.pedidosACobrar, pedidoFechado]

      console.log(`Fila do caixa: ${this.pedidosACobrar}`)
    }
  }

  cobrarPedido(index) {
    if (!this.pedidosACobrar[index]) {
      console.log('Não há pedidos na fila do caixa!')
    } else {
      console.log(`O pedido de ${this.pedidosACobrar[index]} foi pago!`)

      this.pedidosACobrar.splice(index, 1);
    }
  }

  mostrarFila() {
    console.log(`Fila do caixa: ${this.pedidosACobrar}`)
  }

}

module.exports = Caixa