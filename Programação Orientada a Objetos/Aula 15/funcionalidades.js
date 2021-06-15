const fs = require('fs');

const readDB = () => {
  let dataDB = JSON.parse(fs.readFileSync('Aula 15/db.json'))

  return dataDB;
}

const writeDB = (data) => {
  fs.writeFileSync('Aula 15/db.json', JSON.stringify(data));
}

module.exports = {readDB, writeDB};