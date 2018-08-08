function mostrar() {
    var nota;

    nota = document.getElementById("laHora").value;

    switch (nota) {

        case "0":
        case "1":
        case "2":
        case "3":
            alert("La próxima se puede");
            break;


        case "4":
        case "5":
        case "6":
            if(nota < 5){
              alert("Raspando. Debes preocuparte mas!");  
            } else {
                alert("Raspando");
            }
            break;

        case "7":
        case "8":
        case "9":
        case "10":
            if (nota > 8) {
                alert("Aprobó. Muy bien!");
            } else {
                alert("Aprobo");
            }
        break;

        default:
            alert("La nota no es valida");
    }
}
