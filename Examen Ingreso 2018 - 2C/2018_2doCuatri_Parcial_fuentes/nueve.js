function mostrar() {
	var nombre;
	var sexo;
	var estado_civil;
	var cantidad_productos;
	var importe_total;
	var respuesta = "si";
	var mayor_cantidad_productos;
	var nombre_mayor_cantidad_productos;
	var bandera = true;
	var bandera_2 = true;
	var importe_primer_mujer;
	var nombre_primer_mujer;
	var acumulador_gastos_viudos = 0;
	var contador_viudos = 0;
	var promedio_gastos_viudos;


	while (respuesta == "si") {

		nombre = prompt("Ingrese el nombre");

		sexo = prompt("Ingrese el sexo");
		while (sexo != "m" && sexo != "f") {
			sexo = prompt("Error. Ingrese el sexo");
		}

		estado_civil = prompt("Ingrese el estado civil: soltero, casado o viudo");
		while (estado_civil != "casado" && estado_civil != "soltero" && estado_civil != "viudo") {
			estado_civil = prompt("Error. Ingrese el estado civil");
		}

		cantidad_productos = prompt("Ingrese la cantidad de productos");
		while (cantidad_productos < 0) {
			cantidad_productos = prompt("Error. Ingrese la cantidad de productos");
		}

		importe_total = prompt("Ingrese el importe total");
		while (importe_total < 0) {
			importe_total = prompt("Error. Ingrese el importe correcto");
		}


		if (bandera == true) {
			mayor_cantidad_productos = cantidad_productos;
			nombre_mayor_cantidad_productos = nombre;
			bandera = false;
		} else if (cantidad_productos > mayor_cantidad_productos) {
			mayor_cantidad_productos = cantidad_productos;
		}


		if(sexo == "m" && bandera_2 == true){
			importe_primer_mujer = importe_total;
			nombre_primer_mujer = nombre;
			bandera_2 = false;
		}

		if(estado_civil == "viudo"){
			acumulador_gastos_viudos += importe_total;
			contador_viudos++;
		}


		respuesta = prompt("Desea ingresar otro cliente? si/no")
		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Error. Desea continuar? si/no")
		}
	}

	promedio_gastos_viudos = acumulador_gastos_viudos / contador_viudos;

	alert("El nombre de la persona que más productos compró es " + nombre_mayor_cantidad_productos + 
	"El importe de la primer mujer es " + importe_primer_mujer + 
	"El nombre de la primer "nombre_primer_mujer + promedio_gastos_viudos);
}
