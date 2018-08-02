function mostrar() {
    var numero_uno;
    var numero_dos;
    var resultado;

    numero_uno = prompt("Ingrese el primer número");
    numero_dos = prompt("Ingrese el segundo número");
    numero_uno = parseInt(numero_uno);
    numero_dos = parseInt(numero_dos);
    

    if (numero_uno == numero_dos) {
        resultado = "" + numero_uno + numero_dos;
        alert(resultado);
    } else if (numero_uno > numero_dos) {
        resultado = numero_uno - numero_dos;
        alert(resultado);
    } else {
        resultado = numero_uno + numero_dos;
        if (resultado > 10) {
            alert("La suma es " + resultado + " y superó el 10");

        } else {
            alert(resultado);
        }
    }

    
}
