function mostrar() {
	var estacion;
	var temperatura;
	var mensaje;

	estacion = prompt("Ingrese la estación del año");
	temperatura = prompt("Ingrese la temperatura");

	switch (estacion) {

		case "verano":
		case "primavera":
			if (temperatura > 32) {
				mensaje = "Es un horno!";
			} else if (temperatura >= 20) {
				mensaje = "Qué calorcito";
			}
		break;

		case "otoño":
			if(temperatura > 21){
				mensaje = "Mucho calor para el otoño";
			} else if (temperatura > 15){
				mensaje = "Está re bueno";
			} else if (temperatura == 15){
				mensaje = "Está lindo";
			} else {
				mensaje = "Se vino el frío";
			}
		break;

		case "invierno":
			if (temperatura >= 1 && temperatura <= 5) {
				mensaje = "Qué fresquete!";
			}
	}

	alert(mensaje);
}
