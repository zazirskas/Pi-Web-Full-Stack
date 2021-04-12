function menu(opcao, saldo, resultado, saque) {
	while (opcao !== "d") {
    
		if (opcao === "a") {
			console.log(`O seu saldo é: ${saldo}`);
		} else if (opcao === "b") {
			saque = parseFloat(prompt("Insira quanto você deseja sacar: "));
			resultado = saldo - saque;

			if (resultado < 0 || !saque || saque <= 0) {
				console.log("Erro, saldo insuficiente ou operação inválida");
			} else {
				saldo = resultado;
				console.log("Sucesso, saldo após o saque:", resultado);
			}
		} else if (opcao === "c") {
			deposito = parseFloat(prompt("Insira quanto você deseja depositar: "));
			if (deposito > 0) {
				console.log("Sucesso, deposito efetuado com sucesso");
				saldo += deposito;
				console.log("Seu saldo agora é: ", saldo);
			} else if (deposito <= 0 || !deposito)
				console.log(
					"Operação inválida, não é possivel depositar valores negativos ou não números"
				);
		}

		opcao = prompt(
			"(a) consulta saldo \n (b) saque \n (c) depósito \n (d) sair \n Escolha a opção desejada: "
		);
	}
}
