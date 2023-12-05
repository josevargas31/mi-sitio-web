let barMenu = document.getElementById("barMenu");
let main_Menu = document.getElementById("mainMenu");
let main_Menu1 = document.getElementById("mainMenu1");

barMenu.addEventListener("click", function () {
  if (main_Menu.classList.contains("main-menu")) {
    main_Menu.classList.add("main-menu-visible");
    main_Menu.classList.remove("main-menu");
    main_Menu.classList.remove("main-menu1");
  }
  else {
    main_Menu.classList.remove("main-menu-visible");
    main_Menu.classList.add("main-menu");
    main_Menu.classList.add("main-menu1");
  }
});