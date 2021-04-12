let n1;

n1 = parseFloat(prompt('Insira um número para checar se é par ou ímpar: '));

if (n1 % 2 === 0){
  document.write(`${n1} é Par`);
}
else{
    document.write(`${n1} é Ímpar`);
}