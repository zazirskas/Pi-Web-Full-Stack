class Queue {
  constructor(lista = []) {
    this.lista = lista
  }

  push(elemento) {
    this.lista = [...this.lista, elemento]

    return this.lista
  }

  pop() {
    const [elementoRetirado, ...restoLista] = this.lista

    this.lista = restoLista

    return this.lista
  }

  pushQueue(queue) {
    let numero;
    for (numero of queue.lista) {
      this.push(numero);
    }
  }

  toString() {
    console.log(this.lista);
  }
}

const q1 = new Queue();
q1.push(1);
q1.push(2);
q1.push(3);
q1.push(4);

const q2 = new Queue();
q2.push(15);
q2.push(16);
q2.push(17);
q2.push(18);

q1.pushQueue(q2);

q1.toString();