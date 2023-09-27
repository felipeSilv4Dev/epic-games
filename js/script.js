import slide from "./slide.js";
import menuMobile from "./menu-mobile.js";
import { modal } from "./modal.js";

slide();

const menu = new menuMobile(".menu__mobile-bg", ".mobile__bg");
menu.init();

modal.init();
