const usuarios = [
	{
		id: 1,
		nome: "Nathan",
		idade: 28,
		email: "nathan@gmail.com",
		senha: "1234",
	},
	{
		id: 2,
		nome: "Alan",
		idade: 30,
		email: "alan@gmail.com",
		senha: "4321",
	},
	{
		id: 3,
		nome: "Alberto",
		idade: 35,
		email: "alberto@gmail.com",
		senha: "7263",
	},
	{
		id: 4,
		nome: "Jeferson",
		idade: 25,
		email: "jeferson@gmail.com",
		senha: "5242",
	},
];

const idadeMinima = document.getElementById("idadeMinima");
const idadeMaxima = document.getElementById("idadeMaxima");
const resultado = document.getElementById("resultado");


let itemLista = "";
usuarios.forEach((usuario, indice) => {
	itemLista += `<li>Usuario: ${usuario.nome} Indice: ${indice}</li>`;
});
resultado.innerHTML = itemLista;
