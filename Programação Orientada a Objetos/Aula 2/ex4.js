class Televisor {
	constructor(fabricante, modelo, canalAtual, volume, listaCanais) {
    if (isNaN(volume)) {
      throw "Volume deve ser um número, insira novamente"
    }
		this.fabricante = fabricante;
		this.modelo = modelo;
		this.canalAtual = canalAtual;
		this.listaCanais = listaCanais ? listaCanais : [];
		this.volume = volume;
    this.canalMaiuscula = this.listaCanais.map((canal) => canal.toUpperCase())
	}
  
  
	aumentarVolume() {
		if (this.volume >= 100) {
			return console.log("Volume já esta no máximo");
		} else {
			this.volume++;
			console.log(this.volume);
		}
	}

	diminuirVolume() {
		if (this.volume <= 0) {
			return console.log("Volume já esta no mínimo");
		} else {
			this.volume--;
			console.log(this.volume);
		}
	}

	trocarCanal(novoCanal) {
		if (!this.canalMaiuscula.includes(novoCanal.toUpperCase())) {
			return console.log("Este canal não está sintonizado, sintonize");
		} else {
			this.canalAtual = novoCanal;
			console.log("Canal: ", this.canalAtual);
		}
	}

	sintonizarCanal(novoCanal) {
		if (this.canalMaiuscula.includes(novoCanal.toUpperCase())) {
			return console.log("Este canal já foi sintonizado");
		} else if (!novoCanal) {
			return console.log("Nenhum canal inserido, por favor insira um canal para sintonizar");
		} else {
			this.listaCanais.push(novoCanal);
			console.log("Canal sintonizado com sucesso");
			console.log("Novos canais: ", this.listaCanais);
		}
	}
}

const televisor1 = new Televisor("Sony", "S100", "Globo", 99, [
	"Globo",
	"SBT",
	"Record",
]);

console.log(televisor1)
// televisor1.aumentarVolume();
// televisor1.diminuirVolume();
// televisor1.sintonizarCanal();
// televisor1.trocarCanal();
