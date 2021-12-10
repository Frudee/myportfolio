// const toggleMenu = (e) => {
//   const menu = document.querySelector(".menu");

//   if (menu.className === "menu") {
//     menu.className += " active";
//   } else {
//     menu.className = "menu";
//   }
// };
// const toggler = document.querySelector(".toggler");
// toggler.addEventListener("click", toggleMenu);

// function openNav() {
//   document.querySelector(".overlay").style.width = "100%";
// }

// /* Close when someone clicks on the "x" symbol inside the overlay */
// function closeNav() {
//   document.querySelector(".overlay").style.width = "0%";
// }

// openNav = () => {

//   if (menu.classList.contains("hidden")) {
//     box.classList.remove("hidden");
//     setTimeout(function () {
//       box.classList.remove("visuallyhidden");
//     }, 20);
//   }
// };

const menu = document.querySelector(".menu");
const btn = document.querySelector(".hamburger");
btn.addEventListener(
  "click",
  function () {
    if (!menu.classList.contains("shown")) {
      menu.classList.add("shown");
      setTimeout(function () {
        menu.classList.add("visuallyshown");
      }, 20);
    } else {
      menu.classList.remove("visuallyshown");
      menu.addEventListener(
        "transitionend",
        function (e) {
          menu.classList.remove("shown");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
    }
  },
  false
);
