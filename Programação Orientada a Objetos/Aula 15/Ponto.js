const {readDB, writeDB} = require('./funcionalidades');

class Ponto {
  constructor(entrada, saida, horasTrabalhadas = 0) {
    let _entrada = entrada;
    let _saida = saida;
    let _horasTrabalhadas = horasTrabalhadas;

    this.getEntrada = () => {
      return _entrada;
    };

    this.setEntrada = (entrada) => {
      return _entrada = entrada;
    };

    this.getSaida = () => {
      return _saida;
    };

    this.setSaida = (saida) => {
      return _saida = saida;
    };

    this.getHorasTrabalhadas = () => {
      return _horasTrabalhadas;
    };

    this.setHorasTrabalhadas = (horasTrabalhadas) => {
      return _horasTrabalhadas = horasTrabalhadas;
    };
  };

  get entrada() {
    return this.getEntrada();
  };

  set entrada(entrada) {
    return this.setEntrada(entrada);
  };

  get saida() {
    return this.getSaida();
  };

  set saida(saida) {
    return this.setSaida(saida);
  };

  get horasTrabalhadas() {
    return this.getHorasTrabalhadas();
  };

  set horasTrabalhadas(horasTrabalhadas) {
    return this.setHorasTrabalhadas(horasTrabalhadas);
  };

  calcularHoras() {
    let hours = Math.abs(this.saida - this.entrada) / 36e5;
    if (hours >= 0) {
    this.horasTrabalhadas = hours.toFixed(1);
    console.log(`Horas trabalhadas: ${this.horasTrabalhadas}`);
    } else {
      console.log(`Não é possível trabalhar menos que 0 horas.`);
    };
  };

  baterPonto() {
    let now = new Date();

    if (!this.entrada) {
      this.entrada = now;
      console.log(`Ponto de entrada batido com sucesso: ${this.entrada}`);
    } else if (!this.saida) {
      this.saida = now;
      console.log(`Ponto de saida batido com sucesso: ${this.saida}`);

      this.calcularHoras();
    };
  };

  mostrarPonto() {
    console.log(`Entrada: ${this.entrada}`);
    console.log(`Saida: ${this.saida}`);
    console.log(`Horas Trabalhadas: ${this.horasTrabalhadas}`);
  };
};

module.exports = Ponto;





