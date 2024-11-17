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
// tabs

let tab = Array.from(document.querySelectorAll('.tabs .swiper-slide'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let orderTabs = Array.from(document.querySelectorAll('.tabs p'));

tab.forEach((item) => {
  item.addEventListener('click', function () {
    tab.forEach((items) => { items.classList.remove('active') });
    item.classList.add('active');
  })
})

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


// compare

let compareItems = [];
$(".compare-product").click(function (e) {
  e.preventDefault();
  $(".compare-modal").removeClass("hidden");
  const compareId = $(this).attr("compare-id");
  const compareTitle = $(this).attr("compare-title");
  const compareImg = $(this).attr("compare-img");
  const price = $(this).attr("compare-price");
  const oldPrice = $(this).attr("compare-oldPrice");
  if (compareItems.filter((item) => item == compareId).length) return;
  compareItems.push(compareId);

  const compareItem = `
     <div class="rounded-[20px] bg-white shadow-7 compare-item">
            <div class="p-5 pb-9 sm:pb-16">
              <div class="flex items-center justify-between gap-2">
                <svg ompare-id="${compareId}" class="remove-compare-item group cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.728 21.2133L21.2133 12.7281" class="transition group-hover:stroke-red-500" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M21.2133 21.2133L12.728 12.7281" class="transition group-hover:stroke-red-500" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <div class="flex items-center gap-2.5">
                  <p class="text-lg font-semibold text-[#4A4A4A]">55”</p>
                  <img alt="icon" src="../img/svg/image 4.svg" class="w-7 h-7">
                </div>
              </div>
              <img alt="img" src="${compareImg}"
                class="w-[168px] sm:w-[229px] h-[108px] sm:h-[147px] mx-auto mt-[14px] sm:mt-9">
            </div>
            <div class="rounded-[20px] bg-primary pt-7 ltr:pl-4 rtl:pr-4 pb-4 ltr:pr-5 rtl:pl-5">
              <div class="flex justify-between gap-5">
                <a
                  class="text-white transition line-clamp-2 rtl:text-right hover:text-[#E56F8C] sm:text-lg font-semibold h-[53px]">
                  ${compareTitle}
                  </a>
                <a
                  class="relative flex-shrink-0 -top-[50px] rtl:left-2 ltr:right-2 flex-center gradient-hover3 transition border-linear3 ltr:!rounded-br-2xl ltr:sm:!rounded-br-[22px] rtl:!rounded-bl-2xl rtl:sm:!rounded-bl-[22px] !rounded-lg sm:!rounded-2xl w-9 sm:w-[52px] h-9 sm:h-[52px] !border-2 !border-white">
                  <img alt="icon" src="../img/svg/solar_cart-plus-bold-duotone.svg" class="w-6 sm:w-auto h-6 sm:h-auto">
                </a>
              </div>
              <p class="text-[13px] text-white sm:mt-2 opacity-50 rtl:text-left ltr:text-right line-through">
                ${oldPrice} تومان</p>
              <p class="text-white mt-1 sm:mt-3 rtl:text-left ltr:text-right"><span class="font-bold">${price}</span>
                تومان</p>
            </div>
            <div class="js-tilt-glare"
              style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; border-radius: inherit;">
              <div class="js-tilt-glare-inner"
                style="position: absolute; top: 50%; left: 50%; pointer-events: none; background-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%); transform: rotate(180deg) translate(-50%, -50%); transform-origin: 0% 0% 0px; opacity: 0; width: 936px; height: 936px;">
              </div>
            </div>
          </div>
  `;

  $(".compare-list").append(compareItem);
  $('html, body').animate({
    scrollTop: $("#compare-product-modal").offset().top
  }, 2000);
});

$(".clear-compare").click(function () {
  compareItems = [];
  $(".compare-modal").addClass("hidden");
  $(".compare-list").html("");
});

$(".compare-list").on("click", ".remove-compare-item", function () {
  const compareId = $(this).attr("compare-id");
  compareItems = compareItems.filter((item) => item != compareId);
  $(this).parent().parent().parent().remove();
  if (!compareItems.length) $(".compare-modal").addClass("hidden");
});

$(".compare-all").click(function () {
  window.location.href = `./compare.html?ids=${compareItems.join(",")}`;
});