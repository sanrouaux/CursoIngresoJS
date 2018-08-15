function mostrar() 
{
	var numero;
	var mayor;
	var menor;

	numero = prompt("Ingrese el primer numero");
	numero = parseInt(numero);
	
	mayor = numero;
	menor = numero;

	numero = prompt("Ingrese el segundo numero");
	numero = parseInt(numero);

	if(numero > mayor){
		mayor = numero;
	}
	if(numero < menor){
		menor = numero;
	}
	
	numero = prompt("Ingrese el tercer numero");
	numero = parseInt(numero);

	if(numero > mayor){
		mayor = numero;
	}
	if(numero < menor){
		menor = numero;
	}
	

	alert("El número mayor es " + mayor + " y el menor es " + menor);
}
