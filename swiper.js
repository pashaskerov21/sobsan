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