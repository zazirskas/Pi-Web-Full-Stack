const nomes = ['Nathan', 'Gabriel', 'Matheus', 'Roberta'];

let nomeBuscado;

nomeBuscado = prompt('Insira um nome que deseja buscar: ');

if (nomes.indexOf(nomeBuscado) > -1) console.log(`${nomeBuscado}, encontrado!`);
else console.log('Nome não encontrado'); 