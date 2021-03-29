let n1, n2, operador;

n1 = parseFloat(prompt('Insira o primeiro valor da operação: '));

n2 = parseFloat(prompt('Insira o segundo valor da operação: '));

operador = prompt('Insira a operação desejada (+ , - , / , * ): ');

switch (operador) {
  case '+':
    document.write('<h1>', n1 + n2 ,'</h1>');
    break;
  case '-':
    document.write('<h1>', n1 - n2 ,'</h1>');
    break;
  case '/':
    document.write('<h1>', n1 / n2 ,'</h1>');
    break;
  case '*':
    document.write('<h1>', n1 * n2 ,'</h1>');
    break;
  default:
    alert('Operação inválida, digite novamente');
    window.location.reload();
    break;
}