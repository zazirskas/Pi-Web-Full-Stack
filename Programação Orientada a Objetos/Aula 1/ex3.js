
area = (A, B) => A * B;

class Retangulo {
  constructor(ladoA, ladoB) {
  this.altura = ladoA;
  this.largura = ladoB;
  console.log('A area deste retangulo é: ', area(ladoA, ladoB));
  }
}

const retangulo1 = new Retangulo(5, 10);