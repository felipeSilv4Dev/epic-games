import slide from "./slide.js";
import menuMobile from "./menu-mobile.js";
import { modal } from "./modal.js";
import { search } from "./search.js";

slide();

const menu = new menuMobile(".menu__mobile-bg", ".mobile__bg");
menu.init();

modal.init();
search.init();
