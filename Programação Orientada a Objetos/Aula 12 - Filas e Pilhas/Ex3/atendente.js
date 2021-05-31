const Caixa = require("./caixa");

class Atendente {
  constructor(pedidosAConfirmar = []) {
    let _pedidosAConfirmar = pedidosAConfirmar;

    this.getPedidosAConfirmar = () => {
      return _pedidosAConfirmar;
    }

    this.setPedidosAConfirmar = (pedidos) => {
      return _pedidosAConfirmar = pedidos;
    }
  }

  get pedidosAConfirmar() {
    return this.getPedidosAConfirmar();  
  }

  set pedidosAConfirmar(pedidos) {
    return this.setPedidosAConfirmar(pedidos);
  }

  anotarPedido(pedido) {
    this.pedidosAConfirmar = [...this.pedidosAConfirmar, pedido]
  }

  mostrarPedidos() {
    console.log(`Pedidos anotados a confirmar: [ ${this.pedidosAConfirmar} ]`)
  }

  enviarPedido(cozinha) {
    const [pedidoEnviado, ...restoPedidosAConfirmar] = this.pedidosAConfirmar;
    
    this.pedidosAConfirmar = restoPedidosAConfirmar;

    if (!pedidoEnviado) {
      console.log('Náo há pedido para enviar à cozinha');
    } else {

      cozinha.confirmarPedido(pedidoEnviado);
    }
  }

  fecharPedido(salao) {

    if(salao.pedidosEntregues.length == 0) {
      console.log('Não há pedidos para fechar')
    } else {
      const [pedidoFechado, ...pedidosRestantes] = salao.pedidosEntregues;

      salao.pedidosEntregues = pedidosRestantes

      return pedidoFechado
    }
  }
}

module.exports = Atendente