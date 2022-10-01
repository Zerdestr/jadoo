import * as flsFunctions from "./modules/functions.js";


flsFunctions.isWebp();



import Swiper, { EffectCards, Navigation, Pagination, } from 'swiper';

const swiper = new Swiper('.testimonials__swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, EffectCards],

  direction: 'vertical',
  // loop: true,


  wrapperClass: 'testimonials__wrapper',
  slideClass: 'testimonials__slide',
  slideActiveClass: 'testimonials__slide--acive',

  // If we need pagination
  pagination: {
    el: '.testimonials__pagination',
    type: 'bullets',
    bulletClass: 'testimonials__pagination-bullet',
    bulletActiveClass: 'testimonials__pagination-bullet--active',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__button-next',
    prevEl: '.testimonials__button-prev',
  },

  slidesPerView: 1,
});


document.querySelector('.header__lang-active').onclick = function () {
  document.querySelector('.header__lang').classList.toggle('header__lang--active');
};




let burgerHeader = document.querySelector('.burger-header');
let burgerMenu = document.querySelector('.burger-menu');
let headerWrapper = document.querySelector('.header__wrapper');
let body = document.querySelector('body');

burgerHeader.onclick = function () {
  burgerMenu.classList.toggle('burger--active');
  burgerHeader.classList.toggle('burger--active');
  headerWrapper.classList.toggle('header__wrapper--active');
  body.classList.toggle('no-scrol');
};

burgerMenu.onclick = function () {
  burgerMenu.classList.toggle('burger--active');
  burgerHeader.classList.toggle('burger--active');
  headerWrapper.classList.toggle('header__wrapper--active');
  body.classList.toggle('no-scrol');
};

let scrollpos = window.scrollY

const header = document.querySelector(".header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("header--fixed", "header--out");
const remove_class_on_scroll = () => header.classList.remove("header--fixed");
const remove_class_on_out = () => header.classList.remove("header--out");

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll(), remove_class_on_out() }

})

const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 500);
    },
    false
  );
};

onScrollStop(() => {
  remove_class_on_out();
});


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 2;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}
