/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var perimetroTerreno;
    var cantidadAlambre;

    largoTerreno=document.getElementById("Largo").value;
    anchoTerreno=document.getElementById("Ancho").value;

    largoTerreno=parseInt(largoTerreno);
    anchoTerreno=parseInt(anchoTerreno);

    perimetroTerreno=largoTerreno*2+anchoTerreno*2;
    cantidadAlambre=perimetroTerreno*3;

    alert("Se debe comprar "+cantidadAlambre+" metros de alambre");
}

function Circulo () 
{
	var radioTerreno;
    var perimetroTerreno;
    var cantidadAlambre;
    
    radioTerreno=document.getElementById("Radio").value;

    radioTerreno=parseInt(radioTerreno);

    perimetroTerreno=2*Math.PI*radioTerreno;
    cantidadAlambre=perimetroTerreno*3;

    alert("Se debe comprar "+cantidadAlambre+" metros de alambre");

}
function Materiales () 
{
	var largoTerreno;
    var anchoTerreno;
    var areaTerreno;
    var cantidadBolsasCemento;
    var cantidadBolsasCal;

    largoTerreno=document.getElementById("Largo").value;
    anchoTerreno=document.getElementById("Ancho").value;

    largoTerreno=parseInt(largoTerreno);
    anchoTerreno=parseInt(anchoTerreno);

    areaTerreno=largoTerreno*anchoTerreno;

    cantidadBolsasCemento=areaTerreno*2;
    cantidadBolsasCal=areaTerreno*3;

    alert("Para hacer el contrapiso del terreno rectangular necesitamos "
    +cantidadBolsasCemento+ " bolsas de cemento y "
    +cantidadBolsasCal+ " bolsas de cal");
}