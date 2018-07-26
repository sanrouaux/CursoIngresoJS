/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
    var edad;
    var sexo;
    var estadoCivil;
    var sueldo;
    var legajo;
    var nacionalidad;


    edad = prompt("EDAD \nIngrese su edad");

    while(edad<18 || edad>99){
        edad = prompt("EDAD\nLa edad ingresada es errónea. Ingrese su edad");
    } 

    sexo = prompt("SEXO\nIngrese su sexo: ´M´ para masculino, ´F´ para femenino");
    sexo = sexo.toLowerCase();

    while(sexo!="m" && sexo!="f"){
        sexo = prompt("SEXO\nLa letra ingresada es errónea. Ingrese una nueva letra: ´M´ para masculino, " +
        "´F´ para femenino ");
        sexo = sexo.toLowerCase();
    }

    estadoCivil = prompt("ESTADO CIVIL\nIngrese su estado civil: ´1´ si usted es solter@, ´2´ si usted es casad@, " + 
    "´3´ si usted es divorciad@, ´4´ si usted es viud@");

    while(estadoCivil!=1 && estadoCivil!=2 && estadoCivil!=3 && estadoCivil!=4){
        estadoCivil = prompt("ESTADO CIVIL\nEl número ingresado es incorrecto. Ingrese nuevamente su estado civil: " + 
        "´1´ si usted es solter@, ´2´ si usted es casad@, ´3´ si usted es divorciad@, ´4´ si usted es viud@");
    } 

    sueldo = prompt("SUEDO\nIngrese su sueldo bruto");

    while(sueldo<8000){
        sueldo = prompt("SUELDO\nEl valor no fue admitido. Ingrese su sueldo bruto nuevamente");
    }

    legajo = prompt("LEGAJO\nIngrese su número de legajo");
    legajo = parseInt(legajo);

    while(legajo<1000){
        legajo = prompt("LEGAJO\nNúmero incorrecto. Ingrese su número de legajo nuevamente");
        legajo = parseInt(legajo);
    }

    nacionalidad = prompt("NACIONALIDAD\nIngrese su nacionalidad: “A” para argentinos, “E” para extranjeros, " +
    "“N” para nacionalizados");
    nacionalidad = nacionalidad.toLowerCase();

    while(nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n"){
        nacionalidad = prompt("NACIONALIDAD\nLa letra ingresada es incorrecta. Ingresela nuevamente:" +
        " “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
        nacionalidad = nacionalidad.toLowerCase();
    }

    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = estadoCivil;
    document.getElementById("Sueldo").value = sueldo;
    document.getElementById("Legajo").value = legajo;
    document.getElementById("Nacionalidad").value = nacionalidad;
     
     
}
