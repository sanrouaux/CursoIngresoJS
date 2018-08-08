function mostrar() {
    var dia;

    dia = prompt("Introduzca un día de la semana");

    switch (dia) {

        case "sabado":
        case "domingo":
            alert("Buen finde!");
            break;

        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("A trabajar!");
            break;

        default:
            alert("Ese día no existe! Esfuércese: ingrese un día válido");
    }
}
