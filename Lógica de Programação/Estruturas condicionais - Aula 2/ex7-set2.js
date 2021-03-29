let n1, n2, n3, média;

n1 = parseFloat(prompt('Insira a primeira nota: '));
n2 = parseFloat(prompt('Insira a segunda nota: '));
n3 = parseFloat(prompt('Insira a terceira nota: '));

if ((n1 < 0 || n1 > 10 || !n1) || (n2 < 0 || n2 > 10 || !n2) || (n3 < 0 || n3 > 10 || !n3)) {
  alert('As notas devem ser entre 0 e 10, digite novamente');
  window.location.reload();
}

média = (n1 + n2 + n3) / 3;

if (média >= 5) document.write('<h1>Aluno aprovado</h1>');
else document.write('<h1>Aluno reprovado</h1>');