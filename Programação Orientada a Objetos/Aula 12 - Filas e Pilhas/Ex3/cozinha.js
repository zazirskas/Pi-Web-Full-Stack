class Cozinha {
  constructor(pedidos = []) {
    let _pedidos = pedidos;

    this.getPedidos = () => {
      return _pedidos;
    }

    this.setPedidos = (pedidos) => {
      return _pedidos = pedidos;
    }
  }

  get pedidos() {
    return this.getPedidos();
  }

  set pedidos(pedidos) {
    return this.setPedidos(pedidos);
  }

  adicionarPedido(pedido) {
    this.pedidos = [...this.pedidos, pedido];

    return this.pedidos
  }

  confirmarPedido(pedido) {
    if (this.pedidos.length >= 10) {
      throw 'Capacidade máxima da cozinha atingida, náo é possível adicionar mais pedidos'
    } else if (this.pedidos.length >= 0) {
      console.log(`Pedido de ${pedido} recebido na cozinha`);
      this.adicionarPedido(pedido);
    } else if (!pedido){
      console.log('Não há mais pedidos para confirmar!');
    }
  }

  mostrarPedidos() {
    console.log(`Pedidos sendo preparados na cozinha: [ ${this.pedidos} ]`)
  }

  terminarPedido() {
    const [pedidoTerminado, ...restoPedidos] = this.pedidos

    this.pedidos = restoPedidos

    if (pedidoTerminado) {
      console.log(`${pedidoTerminado} foi enviado ao salão`)
      return pedidoTerminado
    } else {
      console.log('Náo há pratos prontos para enviar ao salão')
    }
  }
}

module.exports = Cozinha;