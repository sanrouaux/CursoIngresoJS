function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;

	nota = Math.floor(Math.random()*(11-0))+0;

	if(nota > 8){
		alert("EXCELENTE");
	} else {
		if(nota >= 4){
			alert("APROBÓ");
		} else {
			alert("Vamos, la próxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN