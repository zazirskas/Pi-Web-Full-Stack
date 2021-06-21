const container = document.querySelector("#container");
const box1 = document.querySelector('#box1');
const box1Text = document.querySelector('#box1Text');

let cont = false;


const alterarQuadrado = () => {

  container.classList.toggle('container');
  container.classList.toggle('modified-container');

  box1.classList.toggle('box-1');
  box1.classList.toggle('modified-box-1');

  box1Text.classList.toggle('box-1-text');
  box1Text.classList.toggle('modified-box-1-text');

  if (cont === false) {
    box1Text.innerText = 'MODIFIED HELLO WORLD!';
    cont = true;

  } else if (cont === true) {
    box1Text.innerText = 'HELLO WORLD!';
    cont = false;
  };
};