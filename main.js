// Activa la barra de busqueda
let formSearch = document.querySelector(".form-search");
document.querySelector("#btn-search").onclick = () => {
  formSearch.classList.toggle("active");
  navbar.classList.remove("active");
};

// NavBar block
let navbar = document.querySelector(".navbar");
document.querySelector("#btn-bars").onclick = () => {
  navbar.classList.toggle("active");
  formSearch.classList.remove("active");
};

// others
window.onscroll = () => {
  formSearch.classList.remove("active");
  navbar.classList.remove("active");
};
