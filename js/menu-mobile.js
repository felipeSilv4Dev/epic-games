const btn = document.querySelector(".menu__mobile-bg");
const btnBg = document.querySelector(".mobile__bg");
const body = document.querySelector("body");

const activeMenu = function (e) {
  btn.classList.toggle("active");
  btnBg.classList.toggle("active");
  body.classList.toggle("active");
};

const removeActive = function () {
  btn.classList.remove("active");
  btnBg.classList.remove("active");
  body.classList.remove("active");
};

btn.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("menu__mobile") ||
    e.target.classList.contains("menu__mobile-bg")
  ) {
    activeMenu(e);
  }
});

btnBg.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile__bg")) {
    removeActive();
  }
});
