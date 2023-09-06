export default class MenuMobile {
  constructor(btn, btnBg) {
    this.btn = document.querySelector(btn);
    this.btnBg = document.querySelector(btnBg);
    this.body = document.querySelector("body");
    this.nameclass = this.btnBg.className;
    this.active = "active";
  }
  activeMenu() {
    this.scrollPage();

    this.btn.classList.toggle(this.active);
    this.btnBg.classList.toggle(this.active);
    this.body.classList.toggle(this.active);
  }

  scrollPage() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  removeActive(e) {
    if (e.target.classList.contains(this.nameclass)) {
      this.btn.classList.remove(this.active);
      this.btnBg.classList.remove(this.active);
      this.body.classList.remove(this.active);
    }
  }

  addEvents() {
    this.btn.addEventListener("click", this.activeMenu);
    this.btnBg.addEventListener("click", this.removeActive);
  }

  bind() {
    this.activeMenu = this.activeMenu.bind(this);
    this.removeActive = this.removeActive.bind(this);
  }

  init() {
    this.bind();
    this.addEvents();
  }
}
