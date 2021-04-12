const nomes = ['Nathan', 'Gabriel', 'Matheus', 'Roberta'];

let deletarNome, indiceDeletarNome;

console.log(nomes);

deletarNome = prompt("Insira um nome que deseja deletar: ");

if (nomes.indexOf(deletarNome) > -1){
nomes.splice(nomes.indexOf(deletarNome), 1);

console.log(nomes);
}
else console.log('Nome não encontrado');