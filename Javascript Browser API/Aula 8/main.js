const selectTipo = document.querySelector("#select-tipo");
const optionLista = document.querySelector("#optionLista");
const botao = document.querySelector("#botao");
const options = document.querySelectorAll("option");
const icone = document.querySelector("#chevron-tipo");
const cardMoltres = document.querySelector(".moltres");
const cardArticuno = document.querySelector(".articuno");
const cardZapdos = document.querySelector(".zapdos");
const statsMoltres = document.querySelector(".moltres").querySelectorAll("p");
const statsArticuno = document.querySelector(".articuno").querySelectorAll("p");
const statsZapdos = document.querySelector(".zapdos").querySelectorAll("p");

const moltresHttp = new XMLHttpRequest();
const articunoHttp = new XMLHttpRequest();
const zapdosHttp = new XMLHttpRequest();

let moltres, articuno, zapdos;

let enviado = false;

let interruptor = false;

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
	if (enviado === false) {
		moltresHttp.open("GET", "https://pokeapi.co/api/v2/pokemon/moltres");
		articunoHttp.open("GET", "https://pokeapi.co/api/v2/pokemon/articuno");
		zapdosHttp.open("GET", "https://pokeapi.co/api/v2/pokemon/zapdos");

		moltresHttp.send();
		articunoHttp.send();
		zapdosHttp.send();

		moltresHttp.addEventListener("load", () => {
			moltres = JSON.parse(moltresHttp.response);
			moltres = {
				nome: moltres.name,
				hp: moltres.stats[0].base_stat,
				ataque: moltres.stats[1].base_stat,
				defesa: moltres.stats[2].base_stat,
				ataqueEspecial: moltres.stats[3].base_stat,
				defesaEspecial: moltres.stats[4].base_stat,
				velocidade: moltres.stats[5].base_stat,
				perdeu: false,
			};
			console.log(moltres);
		});

		articunoHttp.addEventListener("load", () => {
			articuno = JSON.parse(articunoHttp.response);
			articuno = {
				nome: articuno.name,
				hp: articuno.stats[0].base_stat,
				ataque: articuno.stats[1].base_stat,
				defesa: articuno.stats[2].base_stat,
				ataqueEspecial: articuno.stats[3].base_stat,
				defesaEspecial: articuno.stats[4].base_stat,
				velocidade: articuno.stats[5].base_stat,
				perdeu: false,
			};
			console.log(articuno);
		});

		zapdosHttp.addEventListener("load", () => {
			zapdos = JSON.parse(zapdosHttp.response);
			zapdos = {
				nome: zapdos.name,
				hp: zapdos.stats[0].base_stat,
				ataque: zapdos.stats[1].base_stat,
				defesa: zapdos.stats[2].base_stat,
				ataqueEspecial: zapdos.stats[3].base_stat,
				defesaEspecial: zapdos.stats[4].base_stat,
				velocidade: zapdos.stats[5].base_stat,
				perdeu: false,
			};
			console.log(zapdos);
		});

		enviado = true;
	}
};

const comparar = (atributoEscolhido) => {
	let perdedor;

	let comparacao = [moltres, zapdos, articuno];

  for (pokemon of comparacao) {
    if (pokemon.nome === "moltres") {
      if (moltres.perdeu === true) {
        moltres.perdeu = false;
  
        cardMoltres.classList.toggle("perdedor");
        cardMoltres.classList.toggle("moltres");
      };

		} else if (pokemon.nome === "articuno") {
      if (articuno.perdeu === true) {
        articuno.perdeu = false;

        cardArticuno.classList.toggle("perdedor");
        cardArticuno.classList.toggle("articuno");
      };

		} else if (pokemon.nome === "zapdos") {
      if (zapdos.perdeu === true) {
        zapdos.perdeu = false;
        cardZapdos.classList.toggle("perdedor");
        cardZapdos.classList.toggle("zapdos");
      };
		};
  }
	comparacao.sort((a, b) => b[atributoEscolhido] - a[atributoEscolhido]);

	console.log(comparacao);

	if (comparacao[0][atributoEscolhido] === comparacao[1][atributoEscolhido]) {
		perdedor = [];
		perdedor.push(comparacao[2]);
	} else {
		perdedor = [];
		perdedor.push(comparacao[1], comparacao[2]);
	}

	console.log(perdedor);

	for (pokemon of perdedor) {
		if (pokemon.nome === "moltres") {
      if (moltres.perdeu === false) {
        moltres.perdeu = true;
  
        cardMoltres.classList.toggle("perdedor");
        cardMoltres.classList.toggle("moltres");
      };

		} else if (pokemon.nome === "articuno") {
      if (articuno.perdeu === false) {
        articuno.perdeu = true;

        cardArticuno.classList.toggle("perdedor");
        cardArticuno.classList.toggle("articuno");
      };

		} else if (pokemon.nome === "zapdos") {

      if (zapdos.perdeu === false) {
        zapdos.perdeu = true;
        cardZapdos.classList.toggle("perdedor");
        cardZapdos.classList.toggle("zapdos");
      };
		};
	};
};

const carregaStatus = () => {
	statsMoltres[0].innerText = `HP: ${moltres.hp}`;
	statsMoltres[1].innerText = `Ataque: ${moltres.ataque}`;
	statsMoltres[2].innerText = `Defesa: ${moltres.defesa}`;
	statsMoltres[3].innerText = `Ataque Especial: ${moltres.ataqueEspecial}`;
	statsMoltres[4].innerText = `Defesa Especial: ${moltres.defesaEspecial}`;
	statsMoltres[5].innerText = `Velocidade: ${moltres.velocidade}`;

	statsArticuno[0].innerText = `HP: ${articuno.hp}`;
	statsArticuno[1].innerText = `Ataque: ${articuno.ataque}`;
	statsArticuno[2].innerText = `Defesa: ${articuno.defesa}`;
	statsArticuno[3].innerText = `Ataque Especial: ${articuno.ataqueEspecial}`;
	statsArticuno[4].innerText = `Defesa Especial: ${articuno.defesaEspecial}`;
	statsArticuno[5].innerText = `Velocidade: ${articuno.velocidade}`;

	statsZapdos[0].innerText = `HP: ${zapdos.hp}`;
	statsZapdos[1].innerText = `Ataque: ${zapdos.ataque}`;
	statsZapdos[2].innerText = `Defesa: ${zapdos.defesa}`;
	statsZapdos[3].innerText = `Ataque Especial: ${zapdos.ataqueEspecial}`;
	statsZapdos[4].innerText = `Defesa Especial: ${zapdos.defesaEspecial}`;
	statsZapdos[5].innerText = `Velocidade: ${zapdos.velocidade}`;
};

enviarSolicitacoesHttp();

botao.addEventListener("click", () => {
	carregaStatus();
	comparar(selectTipo.value);
  console.log(selectTipo.value);
});
