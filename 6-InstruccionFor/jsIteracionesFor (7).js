function mostrar() {

    var numero;
    var cantidad = 0;
    numero = prompt("Ingrese un número");

    for (var i = 1; i <= numero; i++) {
        if(numero%i==0){
            console.log(i);
            cantidad++;
        }
    }

    console.log("La cantidad de divisores es " + cantidad);

}//FIN DE LA FUNCIÓN