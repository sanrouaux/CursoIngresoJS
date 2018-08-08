function mostrar()
{

    var numero_uno;
    var numero_dos;
    var resultado;

    numero_uno = prompt("Introduzca el primero número");
    numero_uno = parseInt(numero_uno);

    numero_dos = prompt("Introzca el segundo número");
    numero_dos = parseInt(numero_dos);

    if(numero_dos > numero_uno){
        resultado = numero_uno + numero_dos;
        if(resultado < 50){
            alert("La suma es " + resultado + "y es menor a 50")
        } else {
            alert("La suma es " + resultado);
        }
    } else if(numero_uno > numero_dos){
        resultado = numero_uno / numero_dos;
        alert("El resultado de la división es " + resultado);
    } else {
        resultado = "" + numero_uno + numero_dos;
        alert(resultado);
    }
}
