export default function SlideGames() {}
let observ = false;
class Slide {
  constructor(wrapper, slide, quantity) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.quantity = quantity;
    this.active = "active";
    this.changeEvent = new Event("changeEvent");

    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
  }
  transition(active) {
    this.slide.style.transition = active ? " .3s" : "";
  }
  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1;
    return this.dist.finalPosition - this.dist.movement;
  }

  moveSlide(distX) {
    this.dist.moveEnd = distX;
    this.slide.style.transform = `translate3d(${distX}px,0,0)`;
  }

  onStart(e) {
    let moveType;

    if (e.type === "mousedown") {
      e.preventDefault();

      this.dist.startX = e.clientX;
      moveType = "mousemove";
    } else {
      this.dist.startX = e.changedTouches[0].clientX;

      moveType = "touchmove";
    }
    this.wrapper.addEventListener(moveType, this.onMove);
    this.transition(false);
  }
  onMove(e) {
    const distMove =
      e.type === "touchmove" ? this.dist.startX - e.targetTouches[0].pageX : "";
    if (distMove > 5 || distMove < -8) {
      this.disableScroll();
      this.regularDist();
    }
    const typeMove =
      e.type === "mousemove" ? e.clientX : e.changedTouches[0].clientX;
    const Position = this.updatePosition(typeMove);
    this.moveSlide(Position);
  }

  onEnd(e) {
    const typend = e.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(typend, this.onMove);
    this.dist.finalPosition = this.dist.moveEnd;
    this.transition(true);
    this.slideOnMoveEnd();
    this.enableScroll();
  }

  slideOnMoveEnd() {
    if (this.dist.movement > 15 * this.quantity && this.index.next !== "") {
      this.nextSlide();
    } else if (
      this.dist.movement < -(15 * this.quantity) &&
      this.index.prev !== ""
    ) {
      this.prevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }
  disableScroll() {
    document.body.style.overflow = "hidden";
  }

  // Para reativar a rolagem
  enableScroll() {
    document.body.style.overflow = "auto";
  }

  bind() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }
  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return margin - slide.offsetLeft;
  }

  slideConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        element,
        position,
      };
    });
  }

  slideIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : "",
      active: index,
      next: index === last ? "" : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slideIndexNav(index);
    this.dist.finalPosition = activeSlide.position;

    this.wrapper.dispatchEvent(this.changeEvent);
  }

  prevSlide() {
    if (this.index.prev !== "") {
      this.changeSlide(this.index.prev);
    }
  }
  nextSlide() {
    if (this.index.next !== "") {
      this.changeSlide(this.index.next);
    }
  }

  init() {
    this.bind();
    this.transition(true);
    this.enableScroll();
    this.addEvents();
    this.slideConfig();
    this.changeSlide(0);
    return this;
  }
}

class Control extends Slide {
  constructor(wrapper, slide, quantity) {
    super(wrapper, slide, quantity);
    this.bindControl();
  }

  createControl() {
    const control = document.createElement("div");
    control.dataset.control = "slide";
    this.slideArray.forEach((_, index) => {
      control.innerHTML += `
				<span><a href"slide${index + 1}">${index + 1}</a></span>`;
    });

    this.wrapper.appendChild(control);

    return control;
  }

  evenControl(item, index) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      this.changeSlide(index);
    });

    this.wrapper.addEventListener("changeEvent", () => {
      this.activeControlItem();
    });
  }

  activeControlItem() {
    this.controlArray.forEach((i) => {
      i.classList.remove(this.active);
    });

    this.controlArray[this.index.active].classList.add(this.active);
  }

  addControl(customControl) {
    this.control =
      document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children];
    this.controlArray.forEach(this.evenControl);
    this.activeControlItem();
  }

  bindControl() {
    this.evenControl = this.evenControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }

  regularDist() {
    this.slideConfig();
  }

  removeEvent() {
    this.moveSlide(0);
    this.wrapper.removeEventListener("mousedown", this.onStart);
    this.wrapper.removeEventListener("mouseup", this.onEnd);
    this.wrapper.removeEventListener("touchstart", this.onStart);
    this.wrapper.removeEventListener("touchend", this.onEnd);
  }
}

///
let hasResized = false;

const groupM1 = new Control(".wrapper-m1", ".slide-m1", 3);
const groupM2 = new Control(".wrapper-m2", ".slide-m2", 3);
const home = new Control(".wrapper-h", ".slide-h", 5);
const game1 = new Control(".wrapper-g1", ".slide-g1", 5);
const game2 = new Control(".wrapper-g2", ".slide-g2", 5);
const game3 = new Control(".wrapper-g3", ".slide-g3", 5);
const list = new Control(".wrapper-l", ".slide-l", 3);

const addSlide = function () {
  home.regularDist();
  game1.regularDist();
  game2.regularDist();
  game3.regularDist();
  list.regularDist();

  if (window.innerWidth <= 760 && !hasResized) {
    groupM1.init();
    groupM2.init();
    home.init();
    game1.init();
    game2.init();
    game3.init();
    list.init();
    if (!observ) {
      groupM1.addControl();
      groupM2.addControl();
      home.addControl();
      list.addControl();
      observ = true;
    }
    hasResized = true;
  } else if (window.innerWidth >= 760 && hasResized) {
    // Redefina hasExecuted se a largura da janela for maior ou igual a 760 pixels

    groupM1.removeEvent();
    groupM2.removeEvent();
    home.removeEvent();
    game1.removeEvent();
    game2.removeEvent();
    game3.removeEvent();
    list.removeEvent();
    hasResized = false;
  }
};

///////////////////////////////////////////////////////////////////////

["load", "resize", "mouseup"].forEach((event) =>
  window.addEventListener(event, addSlide)
);
