function mostrar()
{
 
    /*Enunciado:
    al seleccionar un mes informar. 
    si es Enero: "que comiences bien el año!!!." 
    si es Marzo: "a clases!!!." 
    si es Julio: "se vienen las vacaciones!!!." 
    si es Diciembre: "Felices fiesta!!!."
    */

    var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
    {
        case "Enero":
            alert("Que comiences bien el año!!!");
        break;

        case "Marzo":
            alert("A clases!!!");
        break;

        case "Julio":
            alert("Se vienen las vacaciones!!!");
        break;

        case "Diciembre":
            alert("Felices fiestas!!!");
        break;

        default:
            alert("No se ingresó ninguna sentencia");   

    }



}





/*

ESTRUCTURA SWITCH (estructura de selección múltiple):

Es similar al condicional anidado. Hace el código más prolijo.
No permite evaluar más de una condición a la vez.  


EJEMPLO:

var variable;

switch(variable)
{
    case 1:
    sentencias caso 1;
    break;

    case 2:
    sentencias caso 2
    break;

    case n:
    sentencias caso n;
    break;

    default:
    sentencias default;    
    //en el último caso, no es necesario el break
}


*/