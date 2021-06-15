const fs = require('fs');

const readDB = () => {
  let dataDB = JSON.parse(fs.readFileSync('Projeto Final/db/db.json'))

  return dataDB;
}

const writeDB = (data) => {
  fs.writeFileSync('Projeto Final/db/db.json', JSON.stringify(data));
}

module.exports = {readDB, writeDB};