function mostrar() {
	var titulo;
	var capitulos;
	var tipo;
	var contador_capitulos_pares = 0;
	var nombre_mas_capitulos;
	var cantidad_maxima_capitulos;
	var tipo_menos_capitulos;
	var cantidad_minima_capitulos;
	var acumulador_capitulos = 0;
	var contador_capitulos = 0;
	var promedio_capitulos;
	var respuesta = "si";
	var bandera_1 = true;
	var bandera_2 = true;

	while (respuesta == "si") {

		titulo = prompt("Ingrese el título");

		capitulos = prompt("Ingrese el número de capítulos");
		capitulos = parseInt(capitulos);
		while (capitulos < 1) {
			capitulos = prompt("Error. Ingrese el número de capítulos");
			capitulos = parseInt(capitulos);
		}

		tipo = prompt("Ingrese el tipo de serie: d / t / c / o");
		while (tipo != "d" && tipo != "t" && tipo != "c" && tipo != "o") {
			tipo = prompt("Error. Ingrese el tipo correcto");
		}

		if (capitulos % 2 == 0) {
			contador_capitulos_pares++;
		}

		if (bandera_1 == true) {
			cantidad_maxima_capitulos = capitulos;
			nombre_mas_capitulos = titulo;
			bandera_1 = false;
		} else if (capitulos > cantidad_maxima_capitulos) {
			nombre_mas_capitulos = titulo;
		}


		if (bandera_2 == true) {
			cantidad_minima_capitulos = capitulos;
			tipo_menos_capitulos = tipo;
			bandera_2 = false;
		} else if (capitulos < cantidad_minima_capitulos) {
			tipo_menos_capitulos = tipo;
		}

		acumulador_capitulos += capitulos;
		contador_capitulos++;


		respuesta = prompt("Desea continuar? si/no")
		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Error. Desea continuar? si/no")
		}
	}

	promedio_capitulos = acumulador_capitulos / contador_capitulos;

	alert("La cantidad de series con capítulos pares es: " + contador_capitulos_pares +
		". El nombre de la que tiene más capítulos es: " + nombre_mas_capitulos +
		". El tipo de la que tiene menos capítulos es: " + tipo_menos_capitulos +
		". El promedio de capítulos entre todas las ingresadas es: " + promedio_capitulos);
}
