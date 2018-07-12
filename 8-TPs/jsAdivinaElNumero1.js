/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var edadJugador;
var partidasGanadasMayores=0;
var partidasGanadasMenores=0;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100

    numeroSecreto=Math.floor(Math.random()*(101-1))+1;
    console.log(numeroSecreto);

    edadJugador=document.getElementById("edad").value;

    contadorIntentos=0;
		//alert(numeroSecreto);
}

function verificar()
{
	var numeroElegido;
  numeroElegido=document.getElementById("numero").value;
  contadorIntentos++;
  
  if(numeroElegido==numeroSecreto){
    alert("Usted es un ganador y en solo "+contadorIntentos+" intentos"); 
    if(edadJugador>=18){
      partidasGanadasMayores++;      
    }else{
      partidasGanadasMenores++;
    }   
  }else if(numeroElegido<numeroSecreto){
    alert("Faltó...");
  }else{
    alert("Se pasó...");
  }
	
}