function mostrar() {
    /*
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
    */


    var precio;
    var porcentaje_descuento;
    var descuento; // descuento en dinero
    var precio_con_descuento;
    var iva; // IVA del precio con descuento
    var precio_final;


    precio = prompt("Introduzca el precio del producto");
    porcentaje_descuento = prompt("Introduzca el porcentaje de descuento.");

    precio = parseInt(precio);
    porcentaje_descuento = parseInt(porcentaje_descuento);

    descuento = precio * (porcentaje_descuento / 100);
    precio_con_descuento = precio - descuento;
    iva = precio_con_descuento * (21 / 100);
    precio_final = precio_con_descuento + iva;

    alert("El descuento en dinero es " + descuento + ".\n" +
    "El precio con el descuento es " + precio_con_descuento + ".\n" +
    "El IVA es " + iva + ".");

    document.getElementById("elPrecioFinal").value = precio_final;






}
