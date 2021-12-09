const toggleMenu = (e) => {
  const menu = document.querySelector(".menu");

  if (menu.className === "menu") {
    menu.className += " active";
  } else {
    menu.className = "menu";
  }
};
const toggler = document.querySelector(".toggler");
toggler.addEventListener("click", toggleMenu);
