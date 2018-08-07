function mostrar() 
{
	var importe;
	var cantidad;
	var nombre;
	var precio_final;

	importe = prompt("Ingrese el importe del producto");
	importe = parseInt(importe);
	cantidad = prompt("Ingrese la cantidad comprada");
	cantidad = parseInt(cantidad);
	nombre = prompt("Ingrese el nombre del producto");

	precio_final = (importe * cantidad) * 1.21;

	alert("Compró la cantidad " + cantidad + " del producto " + nombre + ", a un precio de " + importe +
		", pagando el precio de " + precio_final + " con IVA incluido.");
}
