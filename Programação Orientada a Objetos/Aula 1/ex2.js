volume = (raio) =>  console.log('O volume desta bola é: ', 4 * 3.14 * raio * raio * raio / 3);
area = (raio) =>  console.log('A area desta bola é: ', 4 * 3.14 * raio * raio);

class Bola { 
  constructor(cor, raio) {
    this.cor = console.log('A cor dessa bola é: ', cor);
    console.log('O raio desta bola é: ', raio);
    area(raio);
    volume(raio);
  }
}

const bola1 = new Bola('Vermelho', 2);