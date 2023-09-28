class Search {
  constructor() {
    this.btnBox = document.querySelector(".btn__search");
    this.closeSearch = document.querySelector(".close__search");
    this.overlay = document.querySelector(".overlay__search");
    this.active = "active";
  }
  openModal(e) {
    if (e.currentTarget.classList.contains("btn__search")) {
      this.overlay.classList.toggle(this.active);
      document.body.style.overflow = "hidden";
    }
  }
  closeModal(e) {
    if (
      e.target.classList.contains("overlay__search") ||
      e.target.classList.contains("close__search")
    ) {
      this.overlay.classList.remove(this.active);
      document.body.style.overflow = "auto";
    }
  }

  addEvents() {
    this.btnBox.addEventListener("click", this.openModal.bind(this));
    this.overlay.addEventListener("click", this.closeModal.bind(this));
    this.closeSearch.addEventListener("click", this.closeModal.bind(this));
  }

  init() {
    this.addEvents();
  }
}

export const search = new Search();
