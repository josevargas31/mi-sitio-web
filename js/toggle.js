/* 1. Asociamos el ID del toggle-box */
let choiceBox = document.getElementById("choiceBox"); /* Circulo */
let toggleBox = document.getElementById("toggleBox"); /* Rectangulo */
/* Verificamos que la clase se encuentra en choice-box */
toggleBox.addEventListener("click", function(){
  if (choiceBox.classList.contains("choiceBox")) {
    choiceBox.classList.add("choice-box-on")
    choiceBox.classList.remove("choiceBox")
    toggleBox.classList.add("toggle-box-on")
    
  }
  else{
    choiceBox.classList.add("choiceBox")
    choiceBox.classList.remove("choice-box-on")
    toggleBox.classList.remove("toggle-box-on")
  }
})


/* 2.1 Al dar clip quitamos la clase por defecto de choice-box y agregamos la clase que venia con el hover de choice-box */
