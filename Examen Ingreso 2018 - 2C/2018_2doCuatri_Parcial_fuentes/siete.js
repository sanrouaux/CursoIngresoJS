function mostrar() {
	var nombre;
	var ancho;
	var alto;
	var peso;
	var mayor_peso;
	var mayor_altura;
	var menor_ancho;
	var contador_300_600 = 0;

	for (var i = 0; i < 5; i++) {
		nombre = prompt("Ingrese el nombre del producto");

		ancho = prompt("Ingrese el ancho del producto");
		while (ancho < 1 || ancho > 10) {
			ancho = prompt("Error. Ingrese nuevamente el ancho");
		}

		alto = prompt("Ingrese el alto del producto");
		while (alto < 1 || alto > 10) {
			alto = prompt("Error. Ingrese nuevamente el alto");
		}

		peso = prompt("Ingrese el peso del producto");
		while (peso < 1 || peso > 1000) {
			peso = prompt("Error. Ingrese nuevamente el peso");
		}

		if (i == 0) {
			mayor_peso = peso;
		} else if (peso > mayor_peso) {
			mayor_peso = peso;
		}

		if (i == 0) {
			mayor_altura = alto;
		} else if (alto > mayor_altura) {
			mayor_altura = alto;
		}

		if (i == 0) {
			menor_ancho = ancho;
		} else if (ancho < menor_ancho) {
			menor_ancho = ancho;
		}

		if (peso >= 300 && peso <= 600) {
			contador_300_600++;
		}


	}

	alert("El peso más pesado es " + mayor_peso +
		". La altura más alta es " + mayor_altura +
		". El menor ancho es " + menor_ancho +
		". La cantidad que tiene un peso entre 300 y 600 es " + contador_300_600);
}
