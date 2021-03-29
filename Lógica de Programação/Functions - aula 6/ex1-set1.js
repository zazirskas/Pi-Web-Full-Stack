let listaCompras = [];

const adicionaItem = (item) => {
	if (!item) {
		alert("Item inválido, insira um item!");
	} else {
		listaCompras.push(item);
		console.log(listaCompras);
	}
	atualizaLista();
}

const ordenaLista = () => {
	listaCompras = listaCompras.sort();
	atualizaLista();
}

const limparLista = () => {
	listaCompras.splice(0);
	atualizaLista();
}

const atualizaLista = () => {
	const UlTag = document.getElementById("listaCompras");
	let listaLi = "";

	for (item of listaCompras) {
		listaLi += `<li>${item}</li>`;
	}

	UlTag.innerHTML = listaLi;
}
