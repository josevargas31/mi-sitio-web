let boxMinus = document.getElementById("boxMinus");
let boxPlus = document.getElementById("boxPlus");
let boxCantidad = document.getElementById("boxCantidad");
let  = document.getElementById("");
let  = document.getElementById("");

/* Cuando haga click en el "boxSlider se ejucutara el siguiente funcion" */
boxPlus.addEventListener("click", function() {
    /* clasList lista de clases */
    /* let auxCant = document.getElementById("boxCantidad").innerHTML */
        let auxCant = boxCantidad.innerHTML;
    if (auxCant < 10) {
        auxCant++;
        boxCantidad.innerHTML = auxCant;
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
    } 

});


