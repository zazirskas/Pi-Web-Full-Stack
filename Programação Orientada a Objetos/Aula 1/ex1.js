class Cliente {

  constructor(nome, idade, email) {
    if (isNaN(idade)) throw 'Insira um número como idade';
    console.log('Nome:', nome);
    console.log('Idade: ', idade);
    console.log('E-mail: ', email);

  }
}

const cliente1 = new Cliente('Fulano de Tal', '40', 'fulano@mail.com');