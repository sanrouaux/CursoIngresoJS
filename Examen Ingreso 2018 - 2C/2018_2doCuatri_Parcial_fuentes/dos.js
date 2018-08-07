function mostrar() 
{
	var edad;
	var nombre;
	var apellido;
	var localidad;

	edad = prompt("Ingrese su edad");
	nombre = prompt("Ingrese su nombre");
	apellido = prompt("Ingrese su apellido");
	localidad = prompt("Ingrese su localidad");

	alert("Usted es " + nombre + " " + apellido + " , tiene " + edad + " años de edad y vive en " + localidad);
}
