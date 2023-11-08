let headerSearchInput = document.getElementById("headerSearchInput");
let mainContent = document.getElementById("main-content");
let mainBarco = document.getElementById("main-barco");
let btnClose = document.getElementById("btnClose");
let header = document.getElementById("header");

/*  */
let mainImgModal = document.getElementById("mainImgModal");

let mainImgModal1 = document.getElementById("mainImgModal1");
let mainImgModal2 = document.getElementById("mainImgModal2");
let mainImgModal3 = document.getElementById("mainImgModal3");
let mainImgModal4 = document.getElementById("mainImgModal4");
let mainImgModal5 = document.getElementById("mainImgModal5");

let boxMainImgModal1 = document.getElementById("boxMainImgModal1");
let boxMainImgModal2 = document.getElementById("boxMainImgModal2");
let boxMainImgModal3 = document.getElementById("boxMainImgModal3");
let boxMainImgModal4 = document.getElementById("boxMainImgModal4");
let boxMainImgModal5 = document.getElementById("boxMainImgModal5");



/* Para el color de la barra de busqueda */
headerSearchInput.addEventListener("click", function() {

    headerSearchInput.classList.add("header-search-input-focus");
    headerSearchInput.classList.remove("header-search-input-no-focus");
});
mainContent.addEventListener("click", () => {

    headerSearchInput.classList.add("header-search-input-no-focus");
    headerSearchInput.classList.remove("header-search-input-focus");
});

/* sirve para ocultar una etiqueta HTML utilizando su ID */
btnClose.addEventListener("click", function() {
    mainContent.style.display = "none";
});



/* Color menú Imagenes Video */
let optionVideos = document.getElementById("optionVideos");
let optionImagenes = document.getElementById("optionImagenes");

optionVideos.addEventListener("click", () => { 
  optionImagenes.classList.remove("option-selected");
  optionVideos.classList.add("option-selected");
});
optionImagenes.addEventListener("click", () => { 
  optionImagenes.classList.add("option-selected");
  optionVideos.classList.remove("option-selected");
});
/* Cuando haga click en el "" se ejucutara el siguiente funcion */

mainImgModal1.addEventListener("click", () => {
  mainImgModal.setAttribute("src", "img/barco_uno.jpg");

  boxMainImgModal1.classList.add("box-img-barcos");
  boxMainImgModal2.classList.remove("box-img-barcos");
  boxMainImgModal3.classList.remove("box-img-barcos");
  boxMainImgModal4.classList.remove("box-img-barcos");
  boxMainImgModal5.classList.remove("box-img-barcos");

  mainImgModal1.classList.add("img-barcos-opa");
  mainImgModal2.classList.remove("img-barcos-opa");
  mainImgModal3.classList.remove("img-barcos-opa");
  mainImgModal4.classList.remove("img-barcos-opa");
  mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal2.addEventListener("click", () => {
  mainImgModal.setAttribute("src", "img/barco_dos.jpg");

  boxMainImgModal1.classList.remove("box-img-barcos");
  boxMainImgModal2.classList.add("box-img-barcos");
  boxMainImgModal3.classList.remove("box-img-barcos");
  boxMainImgModal4.classList.remove("box-img-barcos");
  boxMainImgModal5.classList.remove("box-img-barcos");

  mainImgModal1.classList.remove("img-barcos-opa");
  mainImgModal2.classList.add("img-barcos-opa");
  mainImgModal3.classList.remove("img-barcos-opa");
  mainImgModal4.classList.remove("img-barcos-opa");
  mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal3.addEventListener("click", () => {
  mainImgModal.setAttribute("src", "img/barco_tres.jpg");

  boxMainImgModal1.classList.remove("box-img-barcos");
  boxMainImgModal2.classList.remove("box-img-barcos");
  boxMainImgModal3.classList.add("box-img-barcos");
  boxMainImgModal4.classList.remove("box-img-barcos");
  boxMainImgModal5.classList.remove("box-img-barcos");

  mainImgModal1.classList.remove("img-barcos-opa");
  mainImgModal2.classList.remove("img-barcos-opa");
  mainImgModal3.classList.add("img-barcos-opa");
  mainImgModal4.classList.remove("img-barcos-opa");
  mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal4.addEventListener("click", () => {
  mainImgModal.setAttribute("src", "img/barco_cuatro.jpg");

  boxMainImgModal1.classList.remove("box-img-barcos");
  boxMainImgModal2.classList.remove("box-img-barcos");
  boxMainImgModal3.classList.remove("box-img-barcos");
  boxMainImgModal4.classList.add("box-img-barcos");
  boxMainImgModal5.classList.remove("box-img-barcos");
  
  mainImgModal1.classList.remove("img-barcos-opa");
  mainImgModal2.classList.remove("img-barcos-opa");
  mainImgModal3.classList.remove("img-barcos-opa");
  mainImgModal4.classList.add("img-barcos-opa");
  mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal5.addEventListener("click", () => {
  mainImgModal.setAttribute("src", "img/barco_cinco.jpg");

  boxMainImgModal1.classList.remove("box-img-barcos");
  boxMainImgModal2.classList.remove("box-img-barcos");
  boxMainImgModal3.classList.remove("box-img-barcos");
  boxMainImgModal4.classList.remove("box-img-barcos");
  boxMainImgModal5.classList.add("box-img-barcos");

  mainImgModal1.classList.remove("img-barcos-opa");
  mainImgModal2.classList.remove("img-barcos-opa");
  mainImgModal3.classList.remove("img-barcos-opa");
  mainImgModal4.classList.remove("img-barcos-opa");
  mainImgModal5.classList.add("img-barcos-opa");
});


/* -------------------------------------------------------------- */
/*  */
/*  */
let mainImgModal111 = document.getElementById("mainImgModal111");

let mainImgModal11 = document.getElementById("mainImgModal11");
let mainImgModal22 = document.getElementById("mainImgModal22");
let mainImgModal33 = document.getElementById("mainImgModal33");
let mainImgModal44 = document.getElementById("mainImgModal44");
let mainImgModal55 = document.getElementById("mainImgModal55");

let boxMainImgModal11 = document.getElementById("boxMainImgModal11");
let boxMainImgModal22 = document.getElementById("boxMainImgModal22");
let boxMainImgModal33 = document.getElementById("boxMainImgModal33");
let boxMainImgModal44 = document.getElementById("boxMainImgModal44");
let boxMainImgModal55 = document.getElementById("boxMainImgModal55");

mainImgModal11.addEventListener("click", () => {
  mainImgModal111.setAttribute("src", "img/barco_uno.jpg");
  boxMainImgModal11.classList.add("box-img-barcos");
  boxMainImgModal22.classList.remove("box-img-barcos");
  boxMainImgModal33.classList.remove("box-img-barcos");
  boxMainImgModal44.classList.remove("box-img-barcos");
  boxMainImgModal55.classList.remove("box-img-barcos");
  mainImgModal11.classList.add("img-barcos-opa");
  mainImgModal22.classList.remove("img-barcos-opa");
  mainImgModal334.classList.remove("img-barcos-opa");
  mainImgModal44.classList.remove("img-barcos-opa");
  mainImgModal55.classList.remove("img-barcos-opa");
});
mainImgModal22.addEventListener("click", () => {
  mainImgModal111.setAttribute("src", "img/barco_dos.jpg");
  boxMainImgModal11.classList.remove("box-img-barcos");
  boxMainImgModal22.classList.add("box-img-barcos");
  boxMainImgModal33.classList.remove("box-img-barcos");
  boxMainImgModal44.classList.remove("box-img-barcos");
  boxMainImgModal55.classList.remove("box-img-barcos");
  mainImgModal11.classList.remove("img-barcos-opa");
  mainImgModal22.classList.add("img-barcos-opa");
  mainImgModal33.classList.remove("img-barcos-opa");
  mainImgModal44.classList.remove("img-barcos-opa");
  mainImgModal55.classList.remove("img-barcos-opa");
});
mainImgModal33.addEventListener("click", () => {
  mainImgModal111.setAttribute("src", "img/barco_tres.jpg");
  boxMainImgModal11.classList.remove("box-img-barcos");
  boxMainImgModal22.classList.remove("box-img-barcos");
  boxMainImgModal33.classList.add("box-img-barcos");
  boxMainImgModal44.classList.remove("box-img-barcos");
  boxMainImgModal55.classList.remove("box-img-barcos");
  mainImgModal11.classList.remove("img-barcos-opa");
  mainImgModal22.classList.remove("img-barcos-opa");
  mainImgModal33.classList.add("img-barcos-opa");
  mainImgModal44.classList.remove("img-barcos-opa");
  mainImgModal55.classList.remove("img-barcos-opa");
});
mainImgModal44.addEventListener("click", () => {
  mainImgModal111.setAttribute("src", "img/barco_cuatro.jpg");
  boxMainImgModal11.classList.remove("box-img-barcos");
  boxMainImgModal22.classList.remove("box-img-barcos");
  boxMainImgModal33.classList.remove("box-img-barcos");
  boxMainImgModal44.classList.add("box-img-barcos");
  boxMainImgModal55.classList.remove("box-img-barcos");
  mainImgModal11.classList.remove("img-barcos-opa");
  mainImgModal22.classList.remove("img-barcos-opa");
  mainImgModal33.classList.remove("img-barcos-opa");
  mainImgModal44.classList.add("img-barcos-opa");
  mainImgModal55.classList.remove("img-barcos-opa");
});
mainImgModal55.addEventListener("click", () => {
  mainImgModal111.setAttribute("src", "img/barco_cinco.jpg");
  boxMainImgModal11.classList.remove("box-img-barcos");
  boxMainImgModal22.classList.remove("box-img-barcos");
  boxMainImgModal33.classList.remove("box-img-barcos");
  boxMainImgModal44.classList.remove("box-img-barcos");
  boxMainImgModal55.classList.add("box-img-barcos");
  mainImgModal11.classList.remove("img-barcos-opa");
  mainImgModal22.classList.remove("img-barcos-opa");
  mainImgModal33.classList.remove("img-barcos-opa");
  mainImgModal44.classList.remove("img-barcos-opa");
  mainImgModal55.classList.add("img-barcos-opa");
});

/* sirve para ocultar una etiqueta HTML utilizando su ID */  /* aqui voy jsjsjsjs */
mainImgModal111.addEventListener("click", function() {

if (mainContent.style.display === "none") {
mainContent.style.display = "block"; 
}

});
/* -------------------------------------------------------------- */
/*  */
let comprarAhora = document.getElementById("comprarAhora");
let agregarCarrito = document.getElementById("agregarCarrito");

comprarAhora.addEventListener("click", () => { 
alert("¡Gracias por su compra!");
});
agregarCarrito.addEventListener("click", () => { 
alert("¡Ha sido agregado con éxito!");
});