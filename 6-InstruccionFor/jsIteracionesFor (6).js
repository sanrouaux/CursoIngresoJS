function mostrar()
{

    var numero;
    var cantidad = 0;

    numero = prompt("Ingrese un número");

    for(var i = 2; i <= numero; i+=2){
        console.log(i);
        cantidad++;
    }

    console.log("La cantidad de números pares es " + cantidad);

}//FIN DE LA FUNCIÓN