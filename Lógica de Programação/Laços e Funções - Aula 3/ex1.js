let n1, n2;

n1 = parseFloat(prompt('Insira um primeiro número: '));

n2 = parseFloat(prompt('Insira um segundo número: '));


function helloWorldCompara(primeiroNumero, segundoNumero){
  while (n1 < n2) {
    console.log('Hello World');
    n1++;
  }
}

helloWorldCompara(n1, n2);
