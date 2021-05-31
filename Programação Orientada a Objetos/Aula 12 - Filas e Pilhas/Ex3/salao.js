class Salao {
  constructor(pedidosEntregues = []) {
    let _pedidosEntregues = pedidosEntregues

    this.getPedidosEntregues = () => {
      return _pedidosEntregues;
    }

    this.setPedidosEntregues = (pedidosEntregues) => {
      return _pedidosEntregues = pedidosEntregues;
    }
  }

  get pedidosEntregues() {
    return this.getPedidosEntregues();
  }

  set pedidosEntregues(pedidosEntregues) {
    return this.setPedidosEntregues(pedidosEntregues);
  }

  mostrarPedidos() {
    console.log(`Pedidos no salão: ${this.pedidosEntregues}`)
  }

  recebePedido(pedido) {
    this.pedidosEntregues = [...this.pedidosEntregues, pedido];

    if (pedido) {
      console.log(`Pedidos agora no salão: ${this.pedidosEntregues}`);
    }
  }
}

module.exports = Salao