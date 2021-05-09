class Funcionario {
  constructor(nome, email, horas, salarioHora) {
    this.nome = nome
    this.email = email
    this.mesAtualHora = horas
    this.mesAtualSalario = salarioHora
  }

  calcularSalarioMensal() {
    return this.mesAtualHora * this.mesAtualSalario
  }
  
  apresentaInformacoes() {
    console.log('Nome: ', this.nome);
    console.log('Email: ', this.email);
    console.log('Salário mensal:', this.calcularSalarioMensal())
  }
}

const funcionario1 = new Funcionario('Fulano', 'Fulano@hotmail.com', 30, 8)

console.log(funcionario1.apresentaInformacoes())