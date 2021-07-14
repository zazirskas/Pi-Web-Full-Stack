const selectTipo = document.querySelector("#select-tipo");
const optionLista = document.querySelector("#optionLista");
const botao = document.querySelector("#botao");
const options = document.querySelectorAll("option");
const icone = document.querySelector("#chevron-tipo");
const containerPokemons = document.querySelector(".container-pokemons");

const pokemons = ["moltres", "articuno", "zapdos"];

const stats = [
	"HP",
	"Ataque",
	"Defesa",
	"Ataque Especial",
	"Defesa Especial",
	"Velocidade",
];

const statsTranslate = {
	hp: "HP",
	attack: "Ataque",
	defense: "Defesa",
	"special-attack": "Ataque Especial",
	"special-defense": "Defesa Especial",
	speed: "Velocidade",
};

const pokemonStats = [];

let moltres, articuno, zapdos;

let enviado = false;

let interruptor = false;

const filtrarStats = (stats) => {
	return stats.map((stat) => {
		return {
			propertyName: statsTranslate[stat.stat.name],
			value: stat.base_stat,
		};
	});
};

const buildHTML = (response, pokemon) => {
	const div = document.createElement("div");
	div.className = `pokemon ${pokemon}`;
	
	const h3 = (document.createElement("h3").innerText = `${pokemon}`);
	div.append(h3);

	if (pokemon === 'moltres') {
		const img = document.createElement('img');
		img.src = "images/0952d801dfe2365b37bf4ec3f38e8c1d.png";

		div.append(img);

	} else if (pokemon === 'articuno') {
		const img = document.createElement('img');
		img.src = "images/144.png";

		div.append(img);
	} else if (pokemon === 'zapdos') {
		const img = document.createElement('img');
		img.src = "images/201-2015027_zapdos-best-bird-moltres-pokemon-legendary-birds-zapdos.png";

		div.append(img);
	}


	containerPokemons.append(div);

	response.forEach((stat) => {
		const p = document.createElement("p");
		p.innerText = `${stat.propertyName}: ${stat.value}`;
		div.append(p);
	});
};

const abreFechaOpcoes = () => {
	if (interruptor === false) {
		optionLista.style.display = "block";
		icone.classList.toggle("fa-chevron-down");
		icone.classList.toggle("fa-chevron-up");
		interruptor = true;

		options.forEach((opcao) => {
			opcao.addEventListener("click", () => {
				selectTipo.value = opcao.value;

				abreFechaOpcoes();
			});
		});
	} else if (interruptor === true) {
		optionLista.style.display = "none";
		icone.classList.toggle("fa-chevron-up");
		icone.classList.toggle("fa-chevron-down");
		interruptor = false;

		options.forEach((opcao) => {
			opcao.addEventListener("click", () => {
				selectTipo.value = opcao.value;

				abreFechaOpcoes();
			});
		});
	}

	if (selectTipo.value) {
		botao.classList.toggle("botao");
		botao.classList.toggle("botao-active");
	}
};

selectTipo.addEventListener("click", () => {
	abreFechaOpcoes();
});

const enviarSolicitacoesHttp = () => {
	for (item of pokemons) {
		let pokemonAtual = item;
		if (enviado === false) {
			solicitacao = fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					const { stats } = data;
					console.log(stats);
					response = filtrarStats(stats);
					buildHTML(response, pokemonAtual);
					pokemonStats.push(response);
				});
				
			}
	}
	
	enviado = true;
};

const comparar = (data, atributoEscolhido) => {
	return data.map((pokemonStats) => {
		return pokemonStats.filter((stats) => stats.propertyName === atributoEscolhido)
	});
};

enviarSolicitacoesHttp();


botao.addEventListener("click", () => {
	let comparacao = comparar(pokemonStats, selectTipo.value);
	let perdedor = [];

	comparacao.sort((a, b) => b[0].value - a[0].value)

	console.log(comparacao);

	if (comparacao[0][0].value === comparacao[1][0].value) {
		perdedor = [];
		perdedor.push(comparacao[2][0]);
	} else {
		perdedor = [];
		perdedor.push(comparacao[1][0], comparacao[2][0]);
	}

	console.log(perdedor);

	const listaDivsPokemons = document.querySelectorAll('.pokemon');

	listaDivsPokemons.forEach((div) => {
		div.classList.remove('perdedor');

		const p = div.querySelectorAll('p');

		p.forEach(element => {

			perdedor.forEach((pokemonPerdedor) => {

				if (element.innerText.includes(`${pokemonPerdedor.propertyName}: ${pokemonPerdedor.value}`) && !div.classList.value.includes('perdedor')) {
					console.log(div.classList.toggle('perdedor'));
				};

			});

		});

	});

});
