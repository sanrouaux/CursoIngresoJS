function mostrar() {
    var nombre;
    var edad;
    var sexo;

    var contador = 0;

    var cantidadMujeres = 0;
    var cantidadHombres = 0;
    var cantidadMayores = 0;
    var cantidadMenores = 0;
    var hombresMayores = 0;
    var edadMinima = 101;
    var edadMaxima = 0;
    var promedioEdadMujeres;
    var totalAñosMujeres = 0;
    var promedioEdadHombres;
    var totalAñosHombres = 0;
    var promedioEdadTotal;
    var nombreMasViejo;
    var nombreMasJoven;
    var sexoMasViejo;
    var nombreMujerMasVieja;
    var edadMaximaMujer = 0;
    var bandera = 0;

    while (contador < 4) {
        contador++;

        nombre = prompt("Ingrese su nombre");

        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);
        while ((edad < 1 || edad > 100) || isNaN(edad)) {
            edad = prompt("Error. Ingrese su edad nuevamente");
            edad = parseInt(edad);
        }

        sexo = prompt("Ingrese su sexo. M/F");
        sexo = sexo.toUpperCase();
        while (sexo != "M" && sexo != "F") {
            sexo = prompt("Error. Ingrese su sexo nuevamente. M/F")
            sexo = sexo.toUpperCase();
        }


        if (sexo == "F") {
            cantidadMujeres++;
            totalAñosMujeres += edad;
            if (edad > edadMaximaMujer) {
                nombreMujerMasVieja = nombre;
            }
        } else {
            cantidadHombres++;
            totalAñosHombres += edad;
        }

        if (edad >= 18) {
            cantidadMayores++;
            if (sexo == "M") {
                hombresMayores++;
            }
        } else {
            cantidadMenores++;
        }


        if (edad < edadMinima) {
            edadMinima = edad;
            nombreMasJoven = nombre;
        }

        if (edad > edadMaxima) {
            edadMaxima = edad;
            nombreMasViejo = nombre;
            sexoMasViejo = sexo;
        }

    }

    promedioEdadMujeres = parseInt(totalAñosMujeres / cantidadMujeres);
    promedioEdadHombres = parseInt(totalAñosHombres / cantidadHombres);
    promedioEdadTotal = parseInt((totalAñosMujeres + totalAñosHombres) / (cantidadHombres + cantidadMujeres));


    document.write("La cantidad de mujeres es: " + cantidadMujeres + "<br>");
    document.write("La cantidad de hombres es: " + cantidadHombres + "<br>");
    document.write("La cantidad de mayores de edad es: " + cantidadMayores + "<br>");
    document.write("La cantidad de menores de edad es: " + cantidadMenores + "<br>");
    document.write("La cantidad de hombres mayores de edad es: " + hombresMayores + "<br>");
    document.write("La edad más baja es: " + edadMinima + "<br>");
    document.write("La edad más alta es: " + edadMaxima + "<br>");
    document.write("El promedio de edad de las mujeres es: " + promedioEdadMujeres + "<br>");
    document.write("El promedio de edad de los hombres es: " + promedioEdadHombres + "<br>");
    document.write("El promedio de edad total es: " + promedioEdadTotal + "<br>");
    document.write("El nombre del más viejo es: " + nombreMasViejo + "<br>");
    document.write("El nombre del más joven es: " + nombreMasJoven + "<br>");
    document.write("El sexo del más viejo es: " + sexoMasViejo + "<br>");
    document.write("El nombre de la mujer más vieja es: " + nombreMujerMasVieja + "<br>");





    /*Bucle FOR:

    for (var i = 0; i < 10; i++) {
        instrucciones;
    }
    */

}
