/* 1. Asociamos el ID del toggñe-box */
let choiceBox = document.getElementById("choiceBox");
let choiceBox = document.getElementById("choiceBox");
/* Verificamos que la clase se encuentra en choice-box */
choiceBox.addEventListener("click", function(){
  if (choiceBox.classList.contains("choiceBox")) {
    choiceBox.classList.add("choice-box-on")
    choiceBox.classList.remove("choice-box-off")
  }
  else{
    choiceBox.classList.remove("choice-box-on")
    choiceBox.classList.add("choice-box-off")
  }
})

/* 2.1 Al dar clip quitamos la clase por defecto de choice-box y agregamos la clase que venia con el hover de choice-box */
