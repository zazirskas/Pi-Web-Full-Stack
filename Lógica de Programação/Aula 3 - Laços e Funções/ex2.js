let senhaDigitada;

const senha = "1234";

function autentica(senhaDigitada, senha) {
	while (senhaDigitada !== senha) {
		senhaDigitada = prompt("Digite a senha: ");
		if (senhaDigitada !== senha) {
			alert("Senha inválida, digite novamente");
		}
	}
	alert("Senha correta");
}

autentica(senhaDigitada, senha);
