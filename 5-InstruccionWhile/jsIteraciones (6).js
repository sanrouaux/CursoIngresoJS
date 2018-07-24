function mostrar()
{

	var contador=0;
	var suma=0;
	var numero;


	while(contador<=4){

		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		suma=suma+numero;
		contador++;
	}


	document.getElementById('suma').value=suma;
	document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN