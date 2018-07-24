function mostrar()
{

	var contador=0;
	var numero;
	var suma_positivos=0;
	var suma_negativos=0;
	var cantidad_positivos=0;
	var cantidad_negativos=0;
	var cantidad_ceros=0;
	var cantidad_pares=0;
	var promedio_positivos=1;
	var promedio_negativos=1;
	var diferencia=0;
	var mensaje;
	
	var respuesta="si";

	while(respuesta!="no"){

		numero=prompt("Ingrese un número");
		numero=parseInt(numero);

		while(isNan(numero){
			numero=prompt("Error! Ingrese un número válido.");
		}

	
		if(numero>0){
			suma_positivos += numero;
			cantidad_positivos++;
						
		} else if(numero<0){

			suma_negativos += numero;
			cantidad_negativos++;
					
		} else{

			cantidad_ceros++;
		}


		if(numero%2==0 && numero!=0){
			cantidad_pares++;
		}


		promedio_positivos = suma_positivos/cantidad_positivos;
		promedio_negativos = suma_negativos/cantidad_negativos;
			
		
		diferencia=cantidad_positivos-cantidad_negativos;
		if(diferencia>0){
			mensaje="Hay más positivos que negativos: " + diferencia;
		}else if(diferencia==0){
			mensaje="Hay igual cantidad de negativos y de positivos";
		}else if(diferencia<0){
			mensaje="Hay más negativo que positivos: " + diferencia*(-1);
		}
	
	
		respuesta=prompt("¿Desea ingresar otro número? si/no")
	}

	document.write(suma_positivos );


}//FIN DE LA FUNCIÓN