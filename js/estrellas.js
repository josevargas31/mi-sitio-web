let puntuacion5 = document.getElementById("puntuacion5");
let puntuacion4 = document.getElementById("puntuacion4");
let puntuacion3 = document.getElementById("puntuacion3");
let puntuacion2 = document.getElementById("puntuacion2");
let puntuacion1 = document.getElementById("puntuacion1");

puntuacion5.innerHTML = "13";
puntuacion4.innerHTML = "33";
puntuacion3.innerHTML = "33";
puntuacion2.innerHTML = "33";
puntuacion1.innerHTML = "33";

let barra1Puntaje = document.getElementById("barra1Puntaje");
let barra2Puntaje = document.getElementById("barra2Puntaje");
let barra3Puntaje = document.getElementById("barra3Puntaje");
let barra4Puntaje = document.getElementById("barra4Puntaje");
let barra5Puntaje = document.getElementById("barra5Puntaje");

let buttonGraficar = document.getElementById("buttonGraficar");

buttonGraficar.addEventListener("click", function () {
  // Calcula el total de votantes
  let totalVotantes =
    parseInt(puntuacion5.innerHTML) +
    parseInt(puntuacion4.innerHTML) +
    parseInt(puntuacion3.innerHTML) +
    parseInt(puntuacion2.innerHTML) +
    parseInt(puntuacion1.innerHTML);

  // Calcula el porcentaje y actualiza la barra para cada puntuación
  barra1Puntaje.style.width = (parseInt(puntuacion5.innerHTML) * 2) + "px";
  barra2Puntaje.style.width = (parseInt(puntuacion4.innerHTML) * 2) + "px";
  barra3Puntaje.style.width = (parseInt(puntuacion3.innerHTML) * 2) + "px";
  barra4Puntaje.style.width = (parseInt(puntuacion2.innerHTML) * 2) + "px";
  barra5Puntaje.style.width = (parseInt(puntuacion1.innerHTML) * 2) + "px";
});
