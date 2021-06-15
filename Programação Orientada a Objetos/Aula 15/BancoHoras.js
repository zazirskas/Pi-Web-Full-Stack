const input = require("readline-sync");
const Colaborador = require("./Colaborador");
const { readDB, writeDB } = require("./funcionalidades");

class BancoHoras {
	constructor(listaFuncionarios) {
		let _listaFuncionarios = listaFuncionarios;

		this.getListaFuncionarios = () => {
			return _listaFuncionarios;
		};

		this.setListaFuncionarios = (listaFuncionarios) => {
			return (_listaFuncionarios = listaFuncionarios);
		};
	}

	get listaFuncionarios() {
		return this.getListaFuncionarios();
	}

	set listaFuncionarios(listaFuncionarios) {
		return this.setListaFuncionarios(listaFuncionarios);
	}

	login() {
		let db = readDB();
		this.listaFuncionarios = db.Funcionarios;

		let Nome;

		let autenticado;
    let Email = input.question("Insira o seu email: ");
    let Senha = input.question("Insira a sua senha: ");

    let loginIndex = this.listaFuncionarios.findIndex((funcionario) => funcionario.email === Email && funcionario.senha === Senha);

			if (loginIndex > -1) {
				console.log('Login realizado com sucesso!');
				autenticado = true;
				return {autenticado, id: loginIndex, nome: this.listaFuncionarios[loginIndex].nome, email: this.listaFuncionarios[loginIndex].email, senha: this.listaFuncionarios[loginIndex].senha, listaPontos: this.listaFuncionarios[loginIndex].pontos};

			} else if (!autenticado) {

			console.log("Funcionário não existe no sistema");
			let opcao;

			opcao = input.question('deseja cadastrar funcionário? (s/n): ');
			if (opcao === 'n') {
				return;
			}
			Nome = input.question("Insira o nome do funcionário: ");
			Email = input.question("Insira o email do funcionário: ");
			Senha = input.question("Insira a senha do funcionário: ");

			let funcionarioNovo = new Colaborador(Nome, Email, Senha);

			this.listaFuncionarios.push({
				nome: funcionarioNovo.nome,
				email: funcionarioNovo.email,
        senha: funcionarioNovo.senha,
				pontos: funcionarioNovo.listaPontos,
			});

			return writeDB({Funcionarios: this.listaFuncionarios});
		}
	}
}

module.exports = BancoHoras;
