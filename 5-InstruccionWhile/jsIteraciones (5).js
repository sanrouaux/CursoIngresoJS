function mostrar()
{

    var sexo = prompt("ingrese f ó m .");

    while(sexo!="f" && sexo!="m"){

        sexo = prompt("Error. Ingrese una letra correcta");
    }


    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN