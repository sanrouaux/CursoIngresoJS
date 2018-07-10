
function mostrar()
{
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
}
