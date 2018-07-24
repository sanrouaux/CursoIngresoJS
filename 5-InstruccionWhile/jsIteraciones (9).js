function mostrar()
{

	var contador=0;	
	
	var numero;
	var numero_max;
	var numero_min;		
	var bandera=true;
	var respuesta='si';


	while(respuesta!='no'){

		numero=prompt("Ingrese un número");
		numero=parseInt(numero);

		if(bandera==true){
			numero_max=numero;
			numero_min=numero;
			bandera=false;
		}

		if(numero>numero_max){
			numero_max=numero;
		}
		if(numero<numero_min){
			numero_min=numero;
		}	

		respuesta=prompt("¿Desea ingresar otro número? si/no");
	}


	document.getElementById("maximo").value=numero_max
	document.getElementById("minimo").value=numero_min


}//FIN DE LA FUNCIÓN