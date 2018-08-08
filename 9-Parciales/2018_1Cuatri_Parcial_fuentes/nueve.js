function mostrar() {

    var marca;
    var peso;
    var temperatura;
    var contador_temperaturas_pares = 0;
    var contador_productos_congelados = 0;
    var acumulador_peso = 0;
    var contador_productos = 0;
    var promedio_peso;
    var peso_maximo;
    var marca_mas_pesado;
    var peso_minimo;
    var bandera = true;
    var respuesta = "si";


    
    while (respuesta == "si") { //cada iteración corresponde a la carga de un producto


        marca = prompt("Ingrese la marca del producto"); //pido marca       

        peso = prompt("Ingrese el peso del producto"); //pido peso y valido         
        peso = parseInt(peso);
        while (peso < 1 || peso > 100) {
            peso = prompt("Error. Ingrese un peso correcto");
        }

        temperatura = prompt("Ingrese la temperatura"); //pido temperatura y valido        
        temperatura = parseInt(temperatura);
        while (temperatura < -30 || temperatura > 30) {
            temperatura = prompt("Error. Ingrese una temperatura válida");
        }


        if (temperatura % 2 == 0) // consigna A) compruebo si la temperatura es par y cuento
        {
            contador_temperaturas_pares++;
        }


        if (temperatura < 0) // consigna C) compruebo si el producto se almacena a menos de 0 grados y cuento
        {
            contador_productos_congelados++;
        }


        acumulador_peso += peso;  // consigna D) calculo el peso promedio                              
        contador_productos++;
        promedio_peso = acumulador_peso / contador_productos;   


        if (bandera == true) { // consignas B y F) encuentro peso máximo y mínimo y guardo la marca del producto más pesado
            peso_maximo = peso;
            marca_mas_pesado = marca;
            peso_minimo = peso;
            bandera = false;
        } else {
            if (peso > peso_maximo) {
                peso_maximo = peso;
                marca_mas_pesado = marca;
            }
            if (peso < peso_minimo) {
                peso_minimo = peso;
            }
        }

        respuesta = prompt("Desea ingresar otro producto? si/no"); //consulto al usuario si desea continuar          
        while (respuesta != "no" && respuesta != "si") {
            respuesta = prompt("Error. Ingrese una respuesta válida: si/no");
        }

    }

    document.write("La cantidad de temperaturas pares es: " + contador_temperaturas_pares + "<br>");
    document.write("La marca del producto más pesado es: " + marca_mas_pesado + "<br>");
    document.write("La cantidad de productos que se almacenan a menos de 0 grados es: " + contador_productos_congelados + "<br>");
    document.write("El promedio del peso de todos los productos es: " + promedio_peso + "<br>");
    document.write("El peso máximo es: " + peso_maximo + "<br>");
    document.write("El peso mínimo es: " + peso_minimo);
}
