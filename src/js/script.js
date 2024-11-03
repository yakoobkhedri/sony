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
  autoplay: true,
  pagination: {
    el: ".swiper-pagination1",
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
});

var mostSell = new Swiper(".mostSell", {
  slidesPerView: 1.3,
  spaceBetween: 24,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  }
});
var mostSell2 = new Swiper(".mostSell2", {
  slidesPerView: 1.3,
  spaceBetween: 24,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  }
});
var tvSize = new Swiper(".tvSize", {
  slidesPerView: 1.3,
  spaceBetween: 50,
  // autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  }
});
var mostSell3 = new Swiper(".mostSell3", {
  slidesPerView: 1.3,
  spaceBetween: 24,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  }
});
var mostSell4 = new Swiper(".mostSell4", {
  slidesPerView: 1.3,
  spaceBetween: 24,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination6",
    clickable: true,
  }
});
var blog = new Swiper(".blog", {
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});