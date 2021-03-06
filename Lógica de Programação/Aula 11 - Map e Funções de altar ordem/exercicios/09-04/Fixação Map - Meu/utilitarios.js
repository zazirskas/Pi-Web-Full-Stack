
const somar = (n1, n2) => n1 + n2; 
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 === 0 ? 0 : n1 / n2;

// Funções alta ordem elas podem receber outras funções por parâmetros
const calcular = (operacao, n1, n2) => operacao(n1, n2);

// Função de alta ordem que recebe função por parâmetro.

const criarExibirMensagem = funcaoExibeTexto => texto => funcaoExibeTexto(texto);
