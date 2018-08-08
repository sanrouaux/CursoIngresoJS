
function mostrar()
{
    /*
    var base;
    var altura;
    var perimetro;
    var superficie;

    base=prompt("Introduce la base del triángulo");    
    altura=prompt("Introduce la altura del triángulo");

    base=parseInt(base);
    altura=+altura;

    perimetro=base*3;
    superficie=(base*altura)/2;

    alert("El perímetro del triángulo es "+perimetro+ " y la superficie es " +superficie);
    */

    var base;
    var altura;
    var superficie;
    var perimetro;

    base = prompt("Introduzca la base del triángulo (en centímetros)");
    base = parseInt(base);

    altura = prompt("Introduzca la altura del triángulo (en centímetros)");
    altura = parseInt(altura);

    superficie = (base * altura) / 2;
    perimetro = base * 3;

    alert("La superficie del triángulo es " + superficie + 
    " cm2 y el perímetro, " + perimetro + " cm.");

}
