function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var descuentoDinero;
    var precioConDescuento;
    var iva;
    var precioConDescuentoMasIva;

    precio=prompt("Introduce el precio");
    porcentajeDescuento=prompt("Introduce el porcentaje de descuento");

    descuentoDinero=parseInt(precio)*parseInt(porcentajeDescuento)/100;
    precioConDescuento=parseInt(precio)-parseInt(descuentoDinero);
    iva=parseInt(precioConDescuento)*0.21;

    alert("El descuento en dinero es "+descuentoDinero+", el precio con el descuento es "
    +precioConDescuento+" y el IVA es "+iva);

    precioConDescuentoMasIva=parseInt(precioConDescuento)+parseInt(iva);

    document.getElementById("elPrecioFinal").value=precioConDescuentoMasIva;

}
