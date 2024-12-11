// menu

let hamIcon = document.getElementById('hamIcon');
let mobileMenu = document.querySelector('.mobileMenu');
let dropdownBtn = document.getElementById('dropdownBtn');

hamIcon.addEventListener('click', function () {
  mobileMenu.classList.add('active');
})
dropdownBtn.addEventListener('click', function () {
  this.querySelector('svg').classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
})
document.getElementById('closemenu').addEventListener('click', function () {
  mobileMenu.classList.remove('active');
})

// swiper

var banner = new Swiper(".banner", {
  loop: true,
  spaceBetween: 65,
  slidesPerView: 1,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  }
});
var aboutBanner = new Swiper(".aboutBanner", {
  loop: true,
  spaceBetween: 65,
  slidesPerView: 1,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination5",
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
  slidesPerView: 1.3,
  spaceBetween: 16,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  }
});
var othersizeSwiper = new Swiper(".othersizeSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 14,
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
      slidesPerView: 4.8,
    }
  },
});
var mySwiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    400: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 3,
    }
  },
});
var mySwiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 18,
  thumbs: {
    swiper: mySwiper,
  },
});

var films = new Swiper(".films", {
  slidesPerView: 1.2,
  spaceBetween: 24,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3.3,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  }
});

// select size

let size = Array.from(document.getElementsByClassName('size'));

size.forEach((item)=>{
  item.addEventListener('click',function () {
    size.forEach((items)=>{items.classList.remove('active')});
    item.classList.add('active');
  })
})

// tabs


let orderTabs = Array.from(document.querySelectorAll('.tabs p'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let tabs = Array.from(document.querySelectorAll('.tabs2 > div'));
let tabContent2 = Array.from(document.querySelectorAll('.tabContent2 > div > div'));

orderTabs.forEach((item) => {
  item.addEventListener('click', function () {
    orderTabs.forEach((items) => { items.classList.remove('active') });
    item.classList.add('active');
    let tabId = item.dataset.id;
    tabContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    })
  })
})

tabs.forEach((item) => {
  item.addEventListener('click', function () {
    tabs.forEach((items) => { items.classList.remove('active') });
    item.classList.add('active');
    let tabId = item.dataset.id;
    tabContent2.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    })
  })
})

// input number

let increment = Array.from(document.getElementsByClassName('increment'));
let decrement = Array.from(document.getElementsByClassName('decrement'));

increment.forEach((item) => {
  item.addEventListener('click', function () {
    item.previousElementSibling.value++;
  })
});
decrement.forEach((item) => {
  item.addEventListener('click', function () {
    if (item.nextElementSibling.value > 1) {
      item.nextElementSibling.value--;
    }
  })
});

// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));
let acordionBtn2 = Array.from(document.getElementsByClassName('acordionBtn2'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('img').classList.toggle('active');
  })
})
acordionBtn2.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('img').classList.toggle('active');
  })
})
