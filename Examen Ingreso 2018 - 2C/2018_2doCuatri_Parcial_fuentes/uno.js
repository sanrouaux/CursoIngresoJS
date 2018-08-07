
function mostrar() 
{
	var ancho;
	var largo;
	var perimetro;
	var cantidad_pintura;

	ancho = prompt("Ingrese el ancho de la cancha (en metros)");
	ancho = parseInt(ancho);
	largo = prompt("Ingrese el largo de la cancha (en metros)");
	largo = parseInt(largo);

	perimetro = ancho * 2 + largo * 2;
	cantidad_pintura = perimetro / 3;

	alert("El perímetro de la cancha es " + perimetro + " metros, y la cantidad de pintura necesaria es "
		+ cantidad_pintura + "litros");
}
