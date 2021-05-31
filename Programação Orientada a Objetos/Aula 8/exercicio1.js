class Funcionario {
	constructor(nome, cpf) {
		this._nome = nome;
		this._cpf = cpf;
	}

	get nome() {
		return this._nome;
	}

	set nome(nome) {
		return (this._nome = nome);
	}

	get cpf() {
		return this._cpf;
	}

	set cpf(cpf) {
		return (this._cpf = cpf);
	}
}

class FuncionarioInterno extends Funcionario {
	constructor(nome, cpf, matricula, salarioHora, saldoHoras = 0) {
		super(nome, cpf);
		this._matricula = matricula;
		let _salarioHora = salarioHora;
		let _saldoHoras = saldoHoras;

		this.getSalarioHora = () => {
			return _salarioHora;
		};

		this.setSalarioHora = (salarioHora) => {
			return (_salarioHora = salarioHora);
		};

		this.getSaldoHoras = () => {
			return _saldoHoras;
		};

		this.setSaldoHoras = (saldoHoras) => {
			return (_saldoHoras = saldoHoras);
		};
	}

	get matricula() {
		return this._matricula;
	}

	set matricula(matricula) {
		return (this._matricula = matricula);
	}

	get salarioHora() {
		return this.getSalarioHora();
	}

	set salarioHora(SalarioHora) {
		return this.setSalarioHora(SalarioHora);
	}

	get saldoHoras() {
		return this.getSaldoHoras();
	}

	set saldoHoras(saldoHoras) {
		return this.setSaldoHoras(saldoHoras);
	}

	calcularSalario() {
		let _salario = this.saldoHoras * this.salarioHora;
		return _salario;
	}

	calcularFerias(mesesTrabalhados) {
		let feriasCalculada =
			((this.calcularSalario()) / 12) * mesesTrabalhados +
			((this.calcularSalario()) / 12) * mesesTrabalhados * (1 / 3);
		return console.log(`Suas férias calculadas são: R$${feriasCalculada}`);
	}

  baterPonto(horasMes) {
    return this.saldoHoras = horasMes;
  }
}

class FuncionarioExterno extends Funcionario {
  constructor(nome, cpf, prestacaoDeServico) {
    super(nome, cpf)
    this._prestacaoDeServico = prestacaoDeServico
  }

  get prestacaoDeServico() {
    return this._prestacaoDeServico
  }

  set prestacaoDeServico(prestacaoDeServico) {
    return this._prestacaoDeServico = prestacaoDeServico
  }

  prestarServico() {
    console.log('Serviço prestado')
  }
}

class Terceirizado extends FuncionarioExterno {
	constructor(nome, cpf, prestacaoDeServico, cnpj, contrato, valorDoServico) {
		super(nome, cpf, prestacaoDeServico)
		this._cnpj = cnpj
		this._contrato = contrato
		this._valorDoServico = valorDoServico
		this.notaFiscal = 0;
	}

	get cnpj() {
		return this._cnpj
	}

	set cnpj(cnpj) {
		return this._cnpj = cnpj
	}

	get contrato() {
		return this._contrato
	}

	set contrato(contrato) {
		return this._contrato = contrato
	}

	get valorDoServico() {
		return this._valorDoServico
	}

	set valorDoServico(valorDoServico) {
		return this._valorDoServico = valorDoServico
	}

	emitirNotaFiscal() {
		this.notaFiscal++;
		console.log(`Nota fiscal emitida: Nº ${this.notaFiscal}`)
	}
}

class Voluntario extends FuncionarioExterno {
	constructor(nome, cpf, prestacaoDeServico, motivacao, valeAlmoço) {
		super(nome, cpf, prestacaoDeServico)
		this._motivacao = motivacao
		this._valeAlmoço = valeAlmoço;
	}

	get motivacao() {
		return this._motivacao
	}

	set motivacao(motivacao) {
		return this._motivacao = motivacao
	}

	get valeAlmoço() {
		return this._valeAlmoço
	}
}

class Vendedor extends FuncionarioInterno {
	constructor(nome, cpf, matricula, salarioHora) {
		super(nome, cpf, matricula, salarioHora)
	}

	get comissao() {
		return this._comissao
	}

	set comissao(comissao) {
		return this._comissao = comissao
	}

	calcularComissao(comissao, vendas) {
		let porcentagem = comissao / 100
		let comissaoFinal = vendas * porcentagem;
		this.comissao = comissaoFinal;
		console.log(`Sua comissão total é: ${this.comissao}`)
	}
	
}

class Contratado extends FuncionarioInterno {
	constructor(nome, cpf, matricula, salarioHora, cargo, saldoHora) {
		super(nome, cpf, matricula, salarioHora)
		this._cargo = cargo
		this.saldoHora = 100
	}

	get cargo() {
		return this._cargo;
	}

	set cargo(cargo) {
		return this._cargo = cargo
	}
}

class Estagiario extends FuncionarioInterno {
	constructor(nome, cpf, matricula, salarioHora, instituicaoEnsino) {
		super(nome, cpf, matricula, salarioHora)
		this._instituicaoEnsino = instituicaoEnsino
	}

	get instituicaoEnsino() {
		return this._instituicaoEnsino;
	}

	set instituicaoEnsino(instituicaoEnsino) {
		return this._instituicaoEnsino = instituicaoEnsino
	}
}

const terc = new Terceirizado('Thiago', 'xxx.xxx.xxx-xx', 'xxxx', '', '' , 1000);

terc.emitirNotaFiscal();

const volun = new Voluntario('xxxx', 'xxx.xxx.xxx-xx', 'Ajudar', 'Ajudar os Outros', 10)

volun.prestarServico()

const vend = new Vendedor('Thiago', 'xxx.xxx.xxx-xx', 'xxxx', 20);

vend.calcularComissao(5, 1000);

const estag = new Estagiario('Thiago', 'xxx.xxx.xxx-xx', 'xxxx', 10, 'PUC')

console.log(estag.instituicaoEnsino)

const contr = new Contratado('Thiago', 'xxx.xxx.xxx-xx', 'xxxx', 10, 'Analista')

contr.baterPonto(100)

contr.calcularSalario()

contr.calcularFerias(12)

// console.log(vend)

// vend.calcularComissao(5, 1000);

// console.log(vend)

// func.baterPonto(180)

// func.calcularSalario()

// func.calcularFerias(12)

// func.emitirNotaFiscal();
// func.emitirNotaFiscal();
// func.baterPonto(100)

// console.log(func.calcularSalario())

