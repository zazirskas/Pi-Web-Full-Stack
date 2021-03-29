const nomes = ["Nathan", "Gabriel", "Nathan", "Matheus", "Roberta"];

let nomeBuscado, primeiroIndice, segundoIndice;

nomeBuscado = prompt("Insira um nome que deseja buscar: ");

primeiroIndice = nomes.indexOf(nomeBuscado);

segundoIndice = nomes.lastIndexOf(nomeBuscado);

console.log(`O primeiro indice de ${nomeBuscado} é ${primeiroIndice}, e o segundo é ${segundoIndice}`);
