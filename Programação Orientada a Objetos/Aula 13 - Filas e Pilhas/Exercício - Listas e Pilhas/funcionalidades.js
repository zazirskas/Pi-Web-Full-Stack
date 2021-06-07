const fs = require('fs');

const lerDB = () => {
  let dataDB = JSON.parse(fs.readFileSync('Aula 13 - Filas e Pilhas/Exercício - Listas e Pilhas/db.json'))

  return dataDB;
}

const escreverDB = (data) => {
  fs.writeFileSync('Aula 13 - Filas e Pilhas/Exercício - Listas e Pilhas/db.json', JSON.stringify(data));
}

module.exports = {lerDB, escreverDB};
