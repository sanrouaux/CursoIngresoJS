function mostrar(){


	var numero;
	var suma_positivos=0;
	var suma_negativos=0;
	var cantidad_positivos=0;
	var cantidad_negativos=0;
	var cantidad_ceros=0;
	var cantidad_pares=0;
	var promedio_positivos=0;
	var promedio_negativos=0;
	var diferencia=0;
	var mensaje;
	
	var respuesta="si";

	while(respuesta!="no"){

		numero=prompt("Ingrese un número");
		numero=parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("Error! Ingrese un número válido.");
		}
		
		
		if(numero>0){
			suma_positivos += numero;
			cantidad_positivos++;
			promedio_positivos = suma_positivos/cantidad_positivos;
						
		}else if(numero<0){
			suma_negativos += numero;
			cantidad_negativos++;
			promedio_negativos = suma_negativos/cantidad_negativos;
					
		}else{
			cantidad_ceros++;
		}

		if(numero%2==0 && numero!=0){
			cantidad_pares++;
		}


		diferencia=cantidad_positivos-cantidad_negativos;
		if(diferencia>0){
			mensaje="Ademas, hay " + diferencia + " positivos mas que negativos";
		}else if(diferencia==0){
			mensaje="Ademas, hay igual cantidad de negativos que de positivos";
		}else if(diferencia<0){
			mensaje="Ademas, hay " + diferencia*(-1) + " negativos mas que positivos";
		}
	
	
		respuesta=prompt("¿Desea ingresar otro número? si/no")
	}

	document.write("La suma de los negativos es: " + suma_negativos + "<br>" +
				   "La suma de los positivos es: " + suma_positivos + "<br>" +
				   "La cantidad de positivos es: " + cantidad_positivos + "<br>" + 
				   "La cantidad de negativos es: " + cantidad_negativos + "<br>" +
				   "La cantidad de ceros es: " + cantidad_ceros + "<br>" +
				   "La cantidad de numeros pares es: " + cantidad_pares + "<br>" +
				   "El promedio de positivos es: " + promedio_positivos + "<br>" +
				   "El promedio de negativos es: " + promedio_negativos + "<br>" +					
					mensaje);


}//FIN DE LA FUNCIÓN