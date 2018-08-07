function mostrar() 
{
	var numero_uno;
	var numero_dos;
	var numero_tres;
	var mayor;
	var menor;

	numero_uno = prompt("Ingrese el primer número");
	numero_uno = parseInt(numero_uno);
	numero_dos = prompt("Ingrese el segundo número");
	numero_dos = parseInt(numero_dos);
	numero_tres = prompt("Ingrese el tercer número");
	numero_tres = parseInt(numero_tres);


	if(numero_uno >= numero_dos && numero_uno >= numero_tres){
		mayor = numero_uno;
	} else if (numero_dos >= numero_uno && numero_dos >= numero_tres){
		mayor = numero_dos;
	} else {
		mayor = numero_tres;
	}

	if(numero_uno <= numero_dos && numero_uno <= numero_tres){
		menor = numero_uno;
	} else if (numero_dos <= numero_uno && numero_dos <= numero_tres){
		menor = numero_dos;
	} else {
		menor = numero_tres;
	}
	

	alert("El número mayor es " + mayor + " y el menor es " + menor);
}
