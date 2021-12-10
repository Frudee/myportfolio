const menu = document.querySelector(".menu");
const btn = document.querySelector(".hamburger");
const body = document.querySelector("body");
btn.addEventListener(
  "click",
  function () {
    if (!menu.classList.contains("shown")) {
      menu.classList.add("shown");
      setTimeout(function () {
        menu.classList.add("visuallyshown");
      }, 20);
      body.style.overflow = "hidden";
      menu.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
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
