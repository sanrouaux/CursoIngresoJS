function mostrar()
{

    var planeta;

    planeta = prompt("Introduzca el nombre de un planeta");

    switch(planeta){

        case "mercurio":
        case "venus":
            alert("Acá hace más calor");
        break;

        case "tierra":
            alert("Acá vivimos");
        break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Acá hace más frío");
        break;
        
        default:
         alert("No se ingresó un nombre válido");

    }
}
