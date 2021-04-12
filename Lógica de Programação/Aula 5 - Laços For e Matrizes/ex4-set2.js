let listaCompras = [];

function adicionaItem(item) {
	if (!item) {
		alert("Item inválido, insira um item!");
	} else {
		listaCompras.push(item);
		console.log(listaCompras);
	}
	atualizaLista();
}

function ordenaLista() {
	listaCompras = listaCompras.sort();
	atualizaLista();
}

function limparLista() {
	listaCompras.splice(0);
	atualizaLista();
}

function atualizaLista() {
	const UlTag = document.getElementById("listaCompras");
	let listaLi = "";

	for (item of listaCompras) {
		listaLi += `<li>${item}</li>`;
	}

	UlTag.innerHTML = listaLi;
}
