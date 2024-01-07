// class Modal {
//   constructor() {
//     this.btnBox = document.querySelector(".btn__box");
//     this.navBox = document.querySelector(".menu__nav-box");
//     this.overlay = document.querySelector(".overlay__box");
//     this.active = "active";
//   }
//   openModal(e) {
//     if (e.currentTarget.classList.contains("btn__box")) {
//       this.overlay.classList.toggle(this.active);
//       this.btnBox.classList.toggle(this.active);
//       this.navBox.classList.toggle(this.active);
//     }
//   }
//   closeModal(e) {
//     if (e.target.classList.contains("overlay__box")) {
//       this.btnBox.classList.remove(this.active);
//       this.navBox.classList.remove(this.active);
//       this.overlay.classList.remove(this.active);
//     }
//   }

//   addEvents() {
//     this.btnBox.addEventListener("click", this.openModal.bind(this));
//     this.overlay.addEventListener("click", this.closeModal.bind(this));
//   }

//   init() {
//     this.addEvents();
//   }
// }
// export const modal = new Modal();
