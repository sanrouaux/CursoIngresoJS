function mostrar()
{

	/*var precio;
	var porcentajeDescuento;
	var precioFinal;

	precio=prompt("Introduce el precio");	
	porcentajeDescuento=prompt("Introduce el porcentaje de descuento");

	precioFinal=parseInt(precio)-(parseInt(precio)*parseInt(porcentajeDescuento)/100);

	alert(precioFinal);

	document.*/




	var precio;
	var descuento;
	var precioFinal;

	precio = prompt("Ingrese el precio");
	descuento = prompt("Ingrese el descuento");

	precio = parseInt(precio);
	descuento = parseInt(descuento);

	precioFinal = precio*((100-descuento)/100);

	alert(precioFinal);
}
