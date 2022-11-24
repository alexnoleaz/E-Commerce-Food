// Activa la barra de busqueda
let formSearch = document.querySelector(".form-search");
document.querySelector("#btn-search").onclick = () => {
  formSearch.classList.toggle("active");
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
};

let navbar = document.querySelector(".navbar");
document.querySelector("#btn-bars").onclick = () => {
  navbar.classList.toggle("active");
  formSearch.classList.remove("active");
  shoppingCart.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#btn-cart").onclick = () => {
  shoppingCart.classList.toggle("active");
  formSearch.classList.remove("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  formSearch.classList.remove("active");
  shoppingCart.classList.remove("active");
};

let swiperBurger = new Swiper(".burger-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  centeredSlides:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

let swiperDrink = new Swiper(".drink-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  centeredSlides:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
