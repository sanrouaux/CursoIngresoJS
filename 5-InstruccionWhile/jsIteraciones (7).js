function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=="si"){

		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		acumulador += numero;
		contador++;

		respuesta=prompt("¿Desea continuar? si/no");

		while(respuesta!="si" && respuesta!="no"){

			respuesta=prompt("Error. Ingrese ´si´ o ´no´");
		}
		
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN


/*
break: palabra reservada para cortar la ejecucion de un bucle

continue: dentro de un bucle, saltea el resto de las líneas de comando
y vuelve a evaluar la condicion

isNaN(num): arroja true o false. Sirve para saber si una variable contiene 
valor NaN
*/