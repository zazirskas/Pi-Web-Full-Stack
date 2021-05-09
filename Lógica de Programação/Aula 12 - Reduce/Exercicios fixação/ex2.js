const numeros = [];
const numero = document.getElementById('numero');

const enviar = () => {
  numeros.push(parseFloat(numero.value));

  const soma = numeros.reduce((acc, numero) => {
    return acc + numero;
  }, 0);

  document.getElementById('resultado').innerText = soma;
};