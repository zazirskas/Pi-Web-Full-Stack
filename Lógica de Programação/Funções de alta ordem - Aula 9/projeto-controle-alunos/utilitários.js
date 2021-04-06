const exibeTexto = (funçãoExibeTexto, texto) => funçãoExibeTexto(texto);


const mensagem = funçãoExibeTexto => Texto => funçãoExibeTexto(Texto);

const exibeMensagem = mensagem(alert);

const soma = (número1, número2) => número1 + número2;

const subtracao = (número1, número2) => número1 - número2;

const multiplicação = (número1, número2) => número1 * número2;

const divisao = (número1, número2) => número1 / número2;

const calcular = (operação, número1, número2) => operação(número1, número2)