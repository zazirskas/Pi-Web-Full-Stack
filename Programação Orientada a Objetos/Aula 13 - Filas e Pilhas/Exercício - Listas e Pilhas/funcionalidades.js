const fs = require('fs');

const lerEstoque = () => {
  let dataDB = JSON.parse(fs.readFileSync('Aula 13 - Filas e Pilhas/Exercício - Listas e Pilhas/db.json'))

  return dataDB;
}

const exportarEstoque = (data) => {
  fs.writeFileSync('Aula 13 - Filas e Pilhas/Exercício - Listas e Pilhas/db.json', JSON.stringify(data));
}

module.exports = {lerEstoque, exportarEstoque}
