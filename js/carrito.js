let boxMinus = document.getElementById("boxMinus");
let boxPlus = document.getElementById("boxPlus");
let boxCantidad = document.getElementById("boxCantidad");
let subTotal = document.getElementById("subTotal");
let numeroProductos = document.getElementById("numeroProductos");
let valorProducto = 350000;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto);
let aux = document.getElementById("precioUnidad").innerHTML = auxValorProducto;

/* Cuando haga click en el "boxSlider se ejucutara el siguiente funcion" */
boxPlus.addEventListener("click", function() {
    /* clasList lista de clases */
    /* let auxCant = document.getElementById("boxCantidad").innerHTML */
        let auxCant = boxCantidad.innerHTML;
        
    if (auxCant < 10) {
        auxCant++;
        boxCantidad.innerHTML = auxCant;

        calcularSubtotal();
        determinarSingularPlural(auxCant);
    }

});

/* Cuando haga click en el "boxSlider se ejucutara el siguiente funcion" */
boxMinus.addEventListener("click", function() {
    /* clasList lista de clases */
    /* let auxCant = document.getElementById("boxCantidad").innerHTML */
        let auxCant = boxCantidad.innerHTML;
        
    if (auxCant >= 1 && auxCant <= 10) {
        auxCant--;
        boxCantidad.innerHTML = auxCant;

        calcularSubtotal();
        determinarSingularPlural(auxCant);
    } 

});

function calcularSubtotal() {
    let auxCant = valorProducto * Number(boxCantidad.innerHTML);
    let auxCanUmil = Intl.NumberFormat("de-DE").format(auxCant)
    document.getElementById("subTotal").innerHTML = "$" + auxCanUmil;

}
function determinarSingularPlural(auxCant) {
    if( auxCant == 1) {
        numeroProductos.innerHTML = "(" + auxCant + " producto)"
    }
    else if(auxCant == 0 || auxCant > 1) {
        numeroProductos.innerHTML = "(" + auxCant + " productos)"
    }
}

