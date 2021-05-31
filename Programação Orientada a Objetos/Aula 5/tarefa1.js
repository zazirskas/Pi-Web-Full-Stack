class Pessoa {
	constructor(nome, telefone, endereco, email, contas = []) {
		let _nome = nome;
		let _telefone = telefone;
		let _endereco = endereco;
		let _email = email;
		let _contas = contas;

		this.getNome = () => {
			return _nome;
		};

		this.setNome = (nome) => {
			return (_nome = nome);
		};

		this.getTelefone = () => {
			return _telefone;
		};

		this.setTelefone = (telefone) => {
			return (_telefone = telefone);
		};

		this.getEndereco = () => {
			return _endereco;
		};

		this.setEndereco = (endereco) => {
			return (_endereco = endereco);
		};

		this.getEmail = () => {
			return _email;
		};

		this.setEmail = (email) => {
			return (_email = email);
		};

		this.getContas = () => {
			return _contas;
		};

		this.setContas = (contas) => {
			return (_contas = contas);
		};
	}
  get nome() {
    return this.getNome();
  }

	get conta() {
		return this.getContas();
	}

	set conta(conta) {
		return this.setContas(conta);
	}

	abrirConta(tipo, saldo, senha, agencia, numero) {
		let conta;

		switch (tipo) {
			case "Conta Corrente":
				conta = new ContaCorrente(saldo, senha, agencia, numero);
				break;
			case "Conta Poupança":
				conta = new ContaPoupanca(saldo, senha, agencia, numero);
        break;
			default:
				console.log("Insira um tipo de conta!");
				break;
		}

		this.conta.push(conta);
		return conta;
	}

	encerrarConta(id) {
		this.conta.splice(id - 1, 1);
		console.log("Conta encerrada");
	}

	solicitarCartaoDebito() {
		console.log("Carta de débito solicitado");
	}
}

class PessoaFisica extends Pessoa {
	constructor(
		nome,
		telefone,
		endereco,
		email,
		contas,
		CPF,
		holerite,
		estadoCivil
	) {
		super(nome, telefone, endereco, email, contas);
		this._CPF = CPF;
		this._holerite = holerite;
		this._estadoCivil = estadoCivil;

		this.getCPF = () => {
			return _CPF;
		};

		this.setCPF = (CPF) => {
			return (_CPF = CPF);
		};

		this.getHolerite = () => {
			return _holerite;
		};

		this.setHolerite = (holerite) => {
			return (_holerite = holerite);
		};

		this.getEstadoCivil = () => {
			return _estadoCivil;
		};

		this.setEstadoCivil = (estadoCivil) => {
			return (_estadoCivil = estadoCivil);
		};
	}

	solicitarCartaoCredito() {
		console.log("Cartão de crédito solicitado");
	}
}

class PessoaJuridica extends Pessoa {
	constructor(nome, telefone, endereco, email, contas, CNPJ, contratoSocial) {
		super(nome, telefone, endereco, email, contas);
		this._CNPJ = CNPJ;
		this._contratoSocial = contratoSocial;
		this._contas = [];

		this.getCNPJ = () => {
			return _CNPJ;
		};

		this.setCNPJ = (CNPJ) => {
			return (_CNPJ = CNPJ);
		};

		this.getContratoSocial = () => {
			return _contratoSocial;
		};

		this.setContratoSocial = (contratoSocial) => {
			return (_contratoSocial = contratoSocial);
		};
	}

	solicitarEmprestimo() {
		console.log("Empréstimo solicitado");
	}
}

class Conta {
	constructor(saldo, senha, agencia, numero) {
		let _saldo = saldo;
		let _senha = senha;
		this._agencia = agencia;
		this._numero = numero;

		this.getSaldo = () => {
			return _saldo;
		};

		this.setSaldo = (saldo) => {
			return (_saldo = saldo);
		};

		this.getSenha = () => {
			return _senha;
		};

		this.setSenha = (senha) => {
			return (_senha = senha);
		};

		this.getAgencia = () => {
			return _agencia;
		};

		this.setAgencia = (agencia) => {
			return (_agencia = agencia);
		};

		this.getNumero = () => {
			return _numero;
		};

		this.setNumero = (numero) => {
			return (_numero = numero);
		};
	}

	get saldo() {
		return this.getSaldo();
	}

	set saldo(novoSaldo) {
		this.setSaldo(novoSaldo);
	}

	depositar(valor) {
		this.saldo = this.saldo + valor;
	}

	sacar(valorSaque) {
		if (this.saldo - valorSaque < -this.limiteCredito) {
			return console.log("Saldo insuficiente, já atingiu o limite de crédito");
		} else {
			return (this.saldo -= valorSaque);
		}
	}
}

class ContaCorrente extends Conta {
	constructor(saldo, senha, agencia, numero) {
		super(saldo, senha, agencia, numero);

		this.limiteCredito = undefined;

		this.getLimiteCredito = () => {
			return this.limiteCredito;
		};
	}

	calcularJurosLimite() {
		this.limiteCredito = 0.5 * this.saldo;

		console.log(`O seu limite de crédito é ${this.limiteCredito}`);
	}
}

class ContaPoupanca extends Conta {
	constructor(saldo, senha, agencia, numero) {
		super(saldo, senha, agencia, numero);

		this.getRendimento = () => {
			return _rendimento;
		};

		this.setRendimento = (rendimento) => {
			return (_rendimento = rendimento);
		};
	}

	calcularRendimentoPeriodo(saldo) {
		this._rendimento = saldo * 0.005;
		console.log(`Seu rendimento foi de R$${this.rendimento}`);

		this.saldo += rendimento;

		return console.log(`Seu saldo com os rendimentos é de R$${this.saldo}`);
	}
}

class PessoaConta {
	constructor(pessoas = [], conta = []) {
		this._pessoas = pessoas;
		this._conta = conta;

		this.getPessoas = () => {
			return _pessoas;
		};

		this.getConta = () => {
			return _conta;
		};
	}
}

const pessoa = new PessoaFisica(
	"João",
	"0000000000",
	"Av Paulista",
	"teste@teste",
	[],
	"xxx.xxx.xxx-xx",
	undefined,
	"Solteiro"
);

const contaPoupanca = pessoa.abrirConta(
	"Conta Poupança",
	0,
	"1234",
	"0001",
	"1"
);
const contaPoupanca2 = pessoa.abrirConta(
	"Conta Poupança",
	0,
	"1234",
	"0002",
	"2"
);
const contaPoupanca3 = pessoa.abrirConta(
	"Conta Poupança",
	0,
	"1234",
	"0003",
	"3"
);



// const conta = pessoa.abrirConta("Conta Corrente");

// console.log(conta);

// conta.depositar(100);

// console.log(conta.getSaldo());

// conta.calcularJurosLimite();

// conta.sacar(130)

// console.log(conta.saldo)

// pessoa.solicitarCartaoDebito()

// pessoa.solicitarCartaoCredito()

// console.log(conta)

// console.log(pessoa.conta);

// pessoa.encerrarConta(3);

// console.log(pessoa.conta)

const pessoaConta = new PessoaConta([pessoa], [contaPoupanca, contaPoupanca2, contaPoupanca3])

console.log(pessoaConta);
