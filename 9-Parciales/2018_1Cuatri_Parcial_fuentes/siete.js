function mostrar() {
    /*var nombre;
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
*/

    var nota;
    var sexo;
    var acumulador_notas = 0;
    var promedio;
    var nota_mas_baja;
    var sexo_nota_mas_baja;
    var contador_varones_aprobados = 0;

    for (var i = 1; i <= 5; i++) {

        nota = prompt("Ingrese la nota");
        nota = parseInt(nota);
        while (nota < 0 || nota > 10) {
            nota = prompt("Ingrese la nota nuevamente");
            nota = parseInt(nota);
        }

        sexo = prompt("Ingrese el sexo. m/f");
        while (sexo != "m" && sexo != "f") {
            sexo = prompt("Ingrese el sexo nuevamente");
        }


        acumulador_notas += nota;

        if (i == 1) {
            nota_mas_baja = nota;
            sexo_nota_mas_baja = sexo;
        } else {
            if (nota < nota_mas_baja) {
                nota_mas_baja = nota;
                sexo_nota_mas_baja = sexo;
            }

        }

        if (sexo == "m" && nota >= 6) {
            contador_varones_aprobados++;
        }

    }

    promedio = acumulador_notas / 5;


    alert("El promedio de todas las notas fue: " + promedio + 
            "\nLa nota mas baja fue " + nota_mas_baja + 
            " y el sexo de esa persona es " + sexo_nota_mas_baja + 
            "\nLa cantidad de varones con 6 o mas fue: " + contador_varones_aprobados);

}
