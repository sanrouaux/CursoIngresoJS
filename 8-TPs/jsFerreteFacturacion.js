/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno=document.getElementById("PrecioUno").value;
    precioDos=document.getElementById("PrecioDos").value;
    precioTres=document.getElementById("PrecioTres").value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    suma=precioUno+precioDos+precioTres;

    alert("El valor de la suma es "+suma);
}

function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    precioUno=document.getElementById("PrecioUno").value;
    precioDos=document.getElementById("PrecioDos").value;
    precioTres=document.getElementById("PrecioTres").value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    promedio=(precioUno+precioDos+precioTres)/3;

    alert("El valor del promedio es "+promedio);
}

function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var sumaMasIva;

    precioUno=document.getElementById("PrecioUno").value;
    precioDos=document.getElementById("PrecioDos").value;
    precioTres=document.getElementById("PrecioTres").value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    sumaMasIva=(precioUno+precioDos+precioTres)*1.21;

    alert("El precio final (IVA incluido) es "+sumaMasIva);
}