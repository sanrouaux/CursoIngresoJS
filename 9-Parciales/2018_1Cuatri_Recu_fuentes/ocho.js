function mostrar() {
    var nombre;
    var paginas;
    var ventas;
    var tema;
    var respuesta = "si";
    var contador_paginas_pares = 0;
    var contador_paginas_impares = 0;
    var contador_cero_ventas = 0;
    var acumulador_ventas = 0;
    var contador_libros = 0;
    var promedio_ventas;
    var paginas_programacion = 0;


    while (respuesta == "si") {
        nombre = prompt("Ingrese el nombre del libro");

        paginas = prompt("Ingrese la cantidad de paginas");
        paginas = parseInt(paginas);
        while (paginas < 1) {
            paginas = prompt("Error. Ingrese la cantidad de paginas");
            paginas = parseInt(paginas);
        }

        ventas = prompt("Ingrese el numero de ventas");
        ventas = parseInt(ventas);
        while (ventas < 0) {
            ventas = prompt("Error. Ingrese el numero de ventas");
            ventas = parseInt(ventas);
        }

        tema = prompt("Ingrese el tema: robotica, programacion, patrones, base de datos");
        while (tema != "robotica" && tema != "programacion" && tema != "patrones" && tema != "base de datos") {
            tema = prompt("Error. Ingrese el tema: robotica, programacion, " +
                "patrones, base de datos");
        }

        if (paginas % 2 == 0) {
            contador_paginas_pares++;
        } else {
            contador_paginas_impares++;
        }

        if (ventas == 0) {
            contador_cero_ventas++;
        }

        acumulador_ventas += ventas;
        contador_libros++;

        if (tema == "programacion") {
            paginas_programacion += paginas;
        }


        respuesta = prompt("Desea continuar?");
        while (respuesta != "si" && respuesta != "no") {
            respuesta = prompt("Error. Desea continuar?");
        }


    }

    promedio_ventas = acumulador_ventas / contador_libros;

    document.write("La cantidad de libros con paginas impares es: " + contador_paginas_impares + "<br>" +
        "La cantidad de libros con paginas pares es: " + contador_paginas_pares + "<br>" +
        "La cantidad de libros con cero ventas es: " + contador_cero_ventas + "<br>" +
        "El promedio de ventas  es: " + promedio_ventas + "<br>" +
        "La suma de todas las paginas de los libros de programacion es: " + paginas_programacion + "<br>");

}
