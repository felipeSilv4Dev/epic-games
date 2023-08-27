export default function SlideGames() {}
const wrapper = document.querySelector(".group");
const slide = document.querySelector(".group__slide");
const wrapper2 = document.querySelector(".group-2");
const slide2 = document.querySelector(".group__slide-2");
let observe;

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
    this.dist.movement = (this.dist.startX - clientX) * 2;
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
  }

  slideOnMoveEnd() {
    if (this.dist.movement > 20 * this.quantity && this.index.next !== "") {
      this.nextSlide();
    } else if (
      this.dist.movement < -(20 * this.quantity) &&
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
    observe = 0;

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
    this.slideArray.forEach((item, index, a) => {
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
  removeClass() {
    wrapper.classList.remove("group__wrapper");
    slide.classList.remove("slide");

    wrapper2.classList.remove("group__wrapper-2");
    slide2.classList.remove("slide-2");
  }
  removeEvents() {
    this.moveSlide(-this.wrapper.offsetWidth + this.wrapper.offsetWidth);
    this.removeClass();
    this.wrapper.removeEventListener("mousedown", this.onStart);
    this.wrapper.removeEventListener("mouseup", this.onEnd);
    this.wrapper.removeEventListener("touchstart", this.onStart);
    this.wrapper.removeEventListener("touchend", this.onEnd);
  }
}

window.addEventListener("load", () => {
  if (window.outerWidth > 760) {
    group.removeEvents();
    group2.removeEvents();
  }
});

const addEventsSlide = function () {
  if (this.innerWidth <= 760 && observe < 1) {
    observe++;
    wrapper.classList.add("group__wrapper");
    slide.classList.add("slide");
    wrapper2.classList.add("group__wrapper-2");
    slide2.classList.add("slide-2");
    group.addEvents();
    group2.addEvents();
  }
};

const removeEventsSlide = function () {
  if (this.innerWidth > 760) {
    observe = 0;
    group.removeEvents();
    group2.removeEvents();
  }
};

window.addEventListener("resize", addEventsSlide);
window.addEventListener("resize", removeEventsSlide);

///
const group = new Control(".group__wrapper", ".slide", 3);
const group2 = new Control(".group__wrapper-2", ".slide-2", 3);

group.init();
group.addControl();
group2.init();
group2.addControl();
///////////////////////////////////////////////////////////////////////
