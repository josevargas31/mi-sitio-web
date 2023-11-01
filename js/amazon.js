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

/* sirve para ocultar una etiqueta HTML utilizando su ID */  /* aqui voy jsjsjsjs */
mainImgModal.addEventListener("click", function() {

  mainContent.classList.remove("box-modal");
  mainBarco.classList.add("main-content");
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
    mainImgModal1.classList.remmove("img-barcos-opa");
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
    mainImgModal1.classList.remmove("img-barcos-opa");
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
    mainImgModal1.classList.remmove("img-barcos-opa");
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
    mainImgModal1.classList.remmove("img-barcos-opa");
    mainImgModal2.classList.remove("img-barcos-opa");
    mainImgModal3.classList.remove("img-barcos-opa");
    mainImgModal4.classList.remove("img-barcos-opa");
    mainImgModal5.classList.add("img-barcos-opa");
  });
