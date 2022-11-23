// Activa la barra de busqueda
let formSearch = document.querySelector(".form-search");
document.querySelector("#btn-search").onclick = () => {
  formSearch.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");
document.querySelector("#btn-bars").onclick = () => {
  navbar.classList.toggle("active");
  formSearch.classList.remove("active");
};

window.onscroll = () =>{
  navbar.classList.remove('active');
  formSearch.classList.remove('active');
}


