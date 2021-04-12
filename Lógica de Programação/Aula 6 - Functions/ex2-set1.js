const pessoas = [];

/* Função principal, recebe valores do HTML, cria um objeto e insere no array 
pessoas e já chama as outras funções */

const adicionaPessoa = (sexo, peso, idade) => {
	const pessoa = {
		idade: parseInt(idade),
		peso: parseFloat(peso),
		sexo,
	};

	pessoas.push(pessoa);

	insereLista();
	mostraQuant();
	mostraMedia();
	mostraMediaPeso();
};

// Funções para mostrar os valores:
const mostraQuant = () => {
	const h4TagH = document.getElementById("totalHomens");
	const h4TagM = document.getElementById("totalMulheres");

	h4TagH.innerText = `Total de homens: ${calculaTotalSexo("M")}`;
	h4TagM.innerText = `Total de Mulheres: ${calculaTotalSexo("F")}`;
};

const mostraMedia = () => {
	const h4TagH = document.getElementById("mediaIdadeHomens");
	const h4TagM = document.getElementById("mediaIdadeMulheres");

	h4TagH.innerText = `Média de idade homens: ${calculaMédiaIdade("M")} anos`;
	h4TagM.innerText = `Média de idade Mulheres: ${calculaMédiaIdade("F")} anos`;
};

const mostraMediaPeso = () => {
	const h4TagH = document.getElementById("mediaPesoHomens");
	const h4TagM = document.getElementById("mediaPesoMulheres");

	h4TagH.innerText = `Média de peso dos homens: ${calculaMédiaPeso("M")} KGs`;
	h4TagM.innerText = `Média de peso das mulheres: ${calculaMédiaPeso("F")} KGs`;
};

//Funções de cálculo dos valores a serem apresentados:
const calculaTotalSexo = (sexo) => {
	const quant = pessoas.filter((pessoa) => pessoa.sexo === sexo).length;
	return quant;
};

const calculaMédiaIdade = (sexo) => {
	let somaIdade, mediaIdade;
	somaIdade = 0;
	for (pessoa of pessoas) {
		if (pessoa.sexo === sexo) {
			somaIdade += pessoa.idade;
		}
	}
	if (calculaTotalSexo(sexo) > 0) {
		return (mediaIdade = somaIdade / calculaTotalSexo(sexo));
	} else {
		return 0;
	}
};

const calculaMédiaPeso = (sexo) => {
	let somaPeso, mediaPeso;
	somaPeso = 0;
	for (pessoa of pessoas) {
		if (pessoa.sexo === sexo) {
			somaPeso += pessoa.peso;
		}
	}
	if (calculaTotalSexo(sexo) > 0) {
		return (mediaPeso = somaPeso / calculaTotalSexo(sexo));
	} else {
		return 0;
	}
};

//Função de atualização da lista:
const insereLista = () => {
	const ulTag = document.getElementById("listaPessoas");

	let adicionaLi = "";

	for (pessoa of pessoas) {
		adicionaLi += `<li>Idade: ${pessoa.idade}, Peso: ${pessoa.peso}, Sexo: ${pessoa.sexo}</li>`;
	}

	ulTag.innerHTML = adicionaLi;
};
