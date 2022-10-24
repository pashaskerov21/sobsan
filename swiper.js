// import Swiper from "swiper/swiper.bundle.min.js"

const swiper1 = new Swiper(".main-swiper-1", {
    autoplay: {
    delay: 3000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const swiper2 = new Swiper(".main-swiper-2", {
    autoplay: {
    delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const swiper3 = new Swiper(".main-swiper-3", {
    autoplay: {
    delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 20},
      992: {slidesPerView: 3,spaceBetween: 20},
      1140: {slidesPerView: 4,spaceBetween: 20},
      },
  });