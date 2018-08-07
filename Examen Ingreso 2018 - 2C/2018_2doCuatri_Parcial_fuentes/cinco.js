function mostrar() {
	var mes;
	var mensaje;

	mes = prompt("Ingrese un mes del año");

	switch (mes) {

		case "febrero":
			mensaje = "Es febrero";
		break;

		case "abril":
		case "junio":
		case "septiembre":
		case "noviembre":
			mensaje = "Tiene 30 días";
		break;

		case "enero":
		case "marzo":
		case "mayo":
		case "julio":
		case "agosto":
		case "octubre":
		case "diciembre":
			mensaje = "Tiene 31 días";
		break;
	
		default:
			mensaje = "Ingrese un mes válido";
	}

	alert(mensaje);
}

