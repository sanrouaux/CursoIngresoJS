/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marca;
    var precioSinDescuento;
    var precioConDescuento;
    var precioFinal;

    cantidadLamparas=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;

    cantidadLamparas=parseInt(cantidadLamparas);

    precioSinDescuento=cantidadLamparas*35;
    precioConDescuento=precioSinDescuento;


    if(cantidadLamparas>=6){
        precioConDescuento=precioSinDescuento*0.5;
    }else if(cantidadLamparas==5){
        if(marca=="ArgentinaLuz"){
            precioConDescuento=precioSinDescuento*0.6;
        }else{
            precioConDescuento=precioSinDescuento*0.7;
        } 
    }else if(cantidadLamparas==4){
        if(marca=="ArgentinaLuz"||marca=="FelipeLamparas"){
            precioConDescuento=precioSinDescuento*0.75;
        } else {
            precioConDescuento=precioSinDescuento*0.8;
        }
    }else if(cantidadLamparas==3){
        if(marca=="ArgentinaLuz"){
            precioConDescuento=precioSinDescuento*0.85;
        }else if(marca=="FelipeLamparas"){
            precioConDescuento=precioSinDescuento*0.9;
        }else{
            precioConDescuento=precioSinDescuento*0.95;
        }
    }
    

    if(precioConDescuento>120){
        precioFinal=precioConDescuento*1.1;
        document.getElementById("precioDescuento").value=precioFinal;
        alert("IIBB Usted pagó "+precioConDescuento*0.1);
    }else{
        document.getElementById("precioDescuento").value=precioConDescuento;
    }


}
