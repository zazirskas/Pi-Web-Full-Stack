class Conta {
  constructor(saldo, senha) {
    if (!saldo) {
      saldo = 0;
    }

    let _saldoConta = saldo;
    let senhaAcesso = senha;

    this.getSaldo = () => _saldoConta;

    this.depositar = (valor) => {
      return _saldoConta += valor;
    }

    this.sacar = (valor) => {
      return _saldoConta -= valor
    }
  }
};

const conta = new Conta(100, 'senha');

conta.depositar(200)

conta.sacar(200);

console.log(conta.getSaldo())
