// input number

let increment = Array.from(document.getElementsByClassName('increment'));
let decrement = Array.from(document.getElementsByClassName('decrement'));

increment.forEach((item)=>{
  item.addEventListener('click', function () {
    item.previousElementSibling.value ++;
  })
});
decrement.forEach((item)=>{
  item.addEventListener('click', function () {
    if (item.nextElementSibling.value > 1) {
      item.nextElementSibling.value --;
    }
  })
});
// swiper
var banner= new Swiper(".banner", {
  loop: true,
  spaceBetween: 65,
  slidesPerView: 1,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  }
});
var categorySwiper = new Swiper(".categorySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 38,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});