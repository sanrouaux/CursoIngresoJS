function mostrar() {

    /*
    var numero;
    var contadorDivisores = 0;
    var bandera = 0;

    numero = prompt("Ingrese un número");

    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            alert("El número no es primo");
            bandera = 1;
            break;
        }
    }


    if (bandera == 0) {
        alert("El número es primo");
    }
    */


    var numero;
    var contadorDivisores = 0;
    var contadorPrimos = 0;
    var cadenaPrimos = "";
    numero = prompt("Ingrese un número");


    for (var i = 1 ; i <= numero; i++) {

        if (i == 2) {
            contadorPrimos++;
            continue;
        }


        for (var j = 1; j <= i; j++) {
            if (i % j == 0) {
                contadorDivisores++;
            }
        }

        if (contadorDivisores == 2) {
            contadorPrimos++;
            cadenaPrimos += i + ", ";
        }

        contadorDivisores = 0;
    }

    alert("Los primos entre 1 y " + numero + " son: " + cadenaPrimos);
    alert("El número de primos es " + contadorPrimos);
}//FIN DE LA FUNCIÓN