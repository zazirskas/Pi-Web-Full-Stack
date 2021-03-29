const clientes = [
	{
		nome: "Nathan",
		permissaoAcesso: false,
		usuario: "NT1",
	},
	{
		nome: "Felipe",
		permissaoAcesso: true,
		usuario: "FLP",
	},
	{
		nome: "Arthur",
		permissaoAcesso: true,
		usuario: "ATR",
	},
];

let recebeUsuario, buscaUsuario, permissao;

recebeUsuario = prompt("Insira o nome do usúario: ");


buscaUsuario = clientes.find((nome) => nome.usuario === recebeUsuario);


if (!buscaUsuario) {
	console.log("Esse usuário não existe");
} else {
	if (buscaUsuario.permissaoAcesso === false) {
		console.log("Você não tem permissão para acessar o sistema");
	} else {
		console.log("Logado com sucesso");
	}
}
