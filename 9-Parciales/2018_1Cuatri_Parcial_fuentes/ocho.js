function mostrar() {

    var letra;
    var numero;
    var respuesta = "si";
    var contador_ceros = 0;
    var contador_pares = 0;
    var contador_impares = 0;
    var acumulador_positivos = 0;
    var promedio_positivos;
    var contador_positivos = 0;
    var suma_negativos = 0;
    var bandera = 1;
    var letra_max;
    var numero_max;
    var letra_min;
    var letra_max;



    while (respuesta == "si") {

        letra = prompt("Ingrese una letra");

        numero = prompt("Ingrese un numero");
        numero = parseInt(numero);
        while (numero < -100 || numero > 100) {
            numero = prompt("Ingrese un numero valido");
            numero = parseInt(numero);
        }

        if (numero % 2 == 0) {
            contador_pares++;
            if (numero == 0) {
                contador_ceros++;
            }
        } else {
            contador_impares++;
        }

        if (numero > 0) {
            acumulador_positivos += numero;
            contador_positivos++;
        } else if (numero < 0) {
            suma_negativos += numero;
        }

        if (bandera == 1) {
            letra_max = letra;
            letra_min = letra;
            numero_max = numero;
            numero_min = numero;
            bandera = 0
        } else {
            if (numero > numero_max) {
                numero_max = numero;
                letra_max = letra;
            }

            if (numero < numero_min) {
                numero_min = numero;
                letra_min = letra;
            }

        }

        respuesta = prompt("Desea continuar? si/no");
        while(respuesta != "si" && respuesta != "no"){
            respuesta = prompt("Ingrese una respuesta válida: si/no");
        }
    }

    promedio_positivos = acumulador_positivos / contador_positivos
    document.write("La cantidad de pares es " + contador_pares + "<br>" 
        + "La cantidad de impares es " + contador_impares + "<br>" 
        + "La cantidad de ceros es " + contador_ceros + "<br>" 
        + "El promedio de todos los positivos es " + promedio_positivos + "<br>"
        + "La suma de todos los negativos es " + suma_negativos + "<br>"
        + "El numero y la letra del maximo son: " + numero_max + " y " + letra_max + "<br>"
        + "El numero y la letra del minimo son: " + numero_min + " y " + letra_min + "<br>");
}
