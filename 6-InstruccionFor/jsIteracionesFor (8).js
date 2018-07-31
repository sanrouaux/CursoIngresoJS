function mostrar() {

    var numero;
    var contadorDivisores = 0;
    numero = prompt("Ingrese un número");

    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contadorDivisores++;
        }
    }

    if (contadorDivisores == 2) {
        alert("El número es primo! :)");
    } else {
        alert("El número NO es primo... :(");
    }

}//FIN DE LA FUNCIÓN