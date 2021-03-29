const lista = [];

let n1;

while (n1 != 'd') {
  n1 = parseInt(prompt('Insira um número: '))
  lista.push(n1);

  n1 = prompt('Digite "d" caso deseje parar de inserir números na lista')
  
}

console.log(lista.sort());