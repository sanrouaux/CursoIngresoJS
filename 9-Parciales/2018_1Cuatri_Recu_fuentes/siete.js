function mostrar() {
    var nota;
    var edad;
    var sexo;
    var acumulador_notas = 0;
    var promedio_notas;
    var nota_menor;
    var sexo_nota_menor;
    var contador_varones_mayores = 0; //varones mayores con nota >= 6
    var edad_menor;
    var sexo_menor;
    var nota_menor;
    var edad_primera_mujer;
    var nota_primera_mujer;
    var bandera = 0;
    var mensaje = "";


    for (var i = 0; i < 5; i++) {

        nota = prompt("Ingrese la nota");
        while (nota < 0 || nota > 10) {
            nota = prompt("Error. Introduzca una nota valida");
        }

        edad = prompt("Introduzca la edad del alumno");
        edad = parseInt(edad);

        sexo = prompt("Introduzca el sexo del alumno: m/f");
        sexo = sexo.toUpperCase();
        while (sexo != "M" && sexo != "F") {
            sexo = prompt("Error. Introduzca una letra valida: m/f")
        }

        acumulador_notas += nota;

        if (i == 0) {
            nota_menor = nota;
            sexo_nota_menor = sexo;
        } else if (nota < nota_menor) {
            nota_menor = nota;
            sexo_nota_menor = sexo;
        }

        if (sexo == "M" && edad > 18 && nota >= 6) {
            contador_varones_mayores++;
        }

        if (i == 0) {
            edad_menor = edad;
            sexo_menor = sexo;
            nota_menor = nota;
        } else {
            if (edad < edad_menor) {
                edad_menor = edad;
                sexo_menor = sexo;
                nota_menor = nota;
            }
        }

        if (sexo == "M" && bandera == 0) {
            edad_primera_mujer = edad;
            nota_primera_mujer = nota;
            bandera = 1;
        }
        
    }

    if(bandera == 0){
        mensaje = "No se ingreso ninguna mujer";
    } else {
        mensaje = "La edad de la primera mujer es " + edad_primera_mujer + " y la nota, " + nota_primera_mujer; 
    }


    promedio_notas = acumulador_notas / 5;

    alert("El promedio de las notas es: " + promedio_notas + "\n"
        + "La nota menor fue: " + nota_menor + "\n"
        + "El sexo de la nota menor fue: " + sexo_nota_menor + "\n"
        + ":La cantidad de varones mayores aprobados fue: " + contador_varones_mayores + "\n"
        + "El sexo de la persona mas joven es " + sexo_menor + " y su nota fue " + nota_menor + "\n"
        + mensaje);

}




