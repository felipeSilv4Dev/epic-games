import Slide from "./slide.js";
import MenuMobile from "./menu-mobile.js";

Slide();

const menu = new MenuMobile(".menu__mobile-bg", ".mobile__bg");
menu.init();
