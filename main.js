
let navbar = document.querySelector(".navbar");
document.querySelector("#btn-bars").onclick = () => {
  navbar.classList.toggle("active");
  shoppingCart.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#btn-cart").onclick = () => {
  shoppingCart.classList.toggle("active");
  navbar.classList.remove("active");
};

let messageBuy = document.querySelector(".message-buy");

window.onscroll = () => {
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
};

const description = "Endulzado con stevia"; // Descripción común en las bebidas

// Array de productos (hamburguesas y bebidas)
const products = [
  {
    id: "burger-01",
    title: "Garbancita",
    description:
      "Deliciosa hamburguesa a base de garbanzo, con pan artesanal, tofu derretido, papas al horno y ensalada fresca",
    price: 8.0,
    img: "./img/Garbanzo.jpeg",
  },
  {
    id: "burger-02",
    title: "La vaca flaca",
    description:
      "Deliciosa hamburguesa elaborada con carne de res 95-5, pan artesanal, acompañada con papas al horno y ensalada fresca",
    price: 13.0,
    img: "./img/Carne.jpeg",
  },
  {
    id: "burger-03",
    title: "La lentejona",
    description:
      "Deliciosa hamburguesa a base de lentejas, pan artesanal, papas al horno e ingredientes bajos en grasa",
    price: 7.0,
    img: "./img/Lentejas.jpeg",
  },
  {
    id: "burger-04",
    title: "La chickenlight",
    description:
      "Deliciosa hamburguesa a base de pulpa de pollo, pan artesanal, papas al horno, guacamole y ensalada fresca",
    price: 7.5,
    img: "./img/Pollo.jpeg",
  },
  {
    id: "drink-01",
    title: "Agua de piña",
    description: description,
    price: 1.5,
    img: "./img/AguaDePiña.jpeg",
  },
  {
    id: "drink-02",
    title: "Bebida de naranja",
    description: description,
    price: 2.0,
    img: "./img/BebidaDeNaranja.jpeg",
  },
  {
    id: "drink-03",
    title: "Jugo de maracuyá",
    description: description,
    price: 2.0,
    img: "./img/JugoDeMaracuya.jpeg",
  },
  {
    id: "drink-04",
    title: "Limonada",
    description: description,
    price: 1.0,
    img: "./img/Limonada.jpeg",
  },
  {
    id: "drink-05",
    title: "Limonada de fresa",
    description: description,
    price: 2.0,
    img: "./img/LimonadaDeFresa.jpeg",
  },
  {
    id: "drink-06",
    title: "Frutos del bosque",
    description: description,
    price: 2.0,
    img: "./img/ZumoFrutosDelBosque.jpeg",
  },
];
let productsInCart = []; // Array que almacena los productos seleccionados

// Elementos del DOM
const burgerContainer = document.querySelector("#burgers-container");
const drinkContainer = document.querySelector("#drinks-container");
const cartContainer = document.querySelector(".shopping-cart");
const spanQuantity = document.querySelector("#quantity");
let btnsAdd = document.querySelectorAll(".btn-add");
let btnsDelete = document.querySelectorAll(".btn-delete");
// let btnPay = document.querySelector("#btn-pay")

// const btnPay = document.querySelector("#btn-pay");

// Función que controla la sección de hamburguesas
const loadBurgers = () => {
  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    div.classList.add("box");
    div.innerHTML = `
     <img src="${products[i].img}" alt="${products[i].title}" />
      <h3>${products[i].title}</h3>
      <div class="price">S/${products[i].price}</div>
      <p>${products[i].description}</p>
      <a class="btn btn-add" id="${products[i].id}">
        Añadir al carrito
      </a>
    `;
    burgerContainer.append(div);
  }
  btnsAddUpdated();
  const swiperBurger = new Swiper(".burger-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    centeredSlides: false,
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
};
loadBurgers();

// Función que controla la sección bebidas
const loadDrinks = () => {
  for (let i = 4; i < 10; i++) {
    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    div.classList.add("box");
    div.innerHTML = `
      <img src="${products[i].img}" alt="${products[i].title}" />
      <h3>${products[i].title}</h3>
      <div class="price">S/${products[i].price}</div>
      <p>${products[i].description}</p>
      <a class="btn btn-add" id="${products[i].id}">
        Añadir al carrito
      </a>
    `;
    drinkContainer.append(div);
  }
  btnsAddUpdated();
  const swiperDrink = new Swiper(".drink-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
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
};
loadDrinks();

// Actualiza el contador dependiendo de la acción
function updatedQuantity() {
  let quantity = productsInCart.reduce(
      (count, product) => count + product.quantity,
      0
    );
  
  spanQuantity.innerText = quantity;
}

// Función para actualizar botones agregar
function btnsAddUpdated() {
  btnsAdd = document.querySelectorAll(".btn-add");
  btnsAdd.forEach((btn) => {
    btn.addEventListener("click", addToCart);
  });
}

// Función para agregar productos al carrito
function addToCart(e) {
  const idProduct = e.currentTarget.id;
  const addedProduct = products.find((product) => product.id === idProduct);

  if (productsInCart.some((product) => product.id === idProduct)) {
    const i = productsInCart.findIndex((product) => product.id === idProduct);
    productsInCart[i].quantity++;
  } else {
    addedProduct.quantity = 1;
    productsInCart.push(addedProduct);
  }

  spanQuantity.classList.add("active");
  updatedQuantity();
  loadShoppingCart();
}

// Función que actualiza el contenido del carrito de compras
function loadShoppingCart() {
  let totalAmount = 0;
  let count = 0;
  cartContainer.innerHTML = "";

  if (productsInCart.length <= 0) {
    spanQuantity.classList.remove("active");

    const h1 = document.createElement("h1");
    h1.innerText = "Tu carrito está vacío";
    cartContainer.append(h1);

    return;
  }

  productsInCart.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `
      <i class="fas fa-trash btn-delete" id="${product.id}-delete"></i>
      <img src="${product.img}" alt="${product.title}" />
      <div class="content">
        <h3>${product.title}</h3>
        <span class="price"> S/${product.price} /-</span>
        <span class="quantity">cant: ${product.quantity}</span>
      </div>
    `;
    count += product.quantity;
    totalAmount += product.price * product.quantity;
    cartContainer.append(div);
  });
  
  btnsDeleteUpdated();

  if (count === 0) {
    spanQuantity.classList.remove("active");

    const h1 = document.createElement("h1");
    h1.innerText = "Tu carrito está vacío";
    cartContainer.append(h1);

    return;
  }

  const divTotal = document.createElement("div");
  divTotal.classList.add("total");
  divTotal.innerText = `Total: S/${totalAmount}`;
  cartContainer.append(divTotal);

  const btnPay = document.createElement("a");
  btnPay.classList.add("btn");
  btnPay.id="btn-pay";
  btnPay.innerText = "Pagar ahora";
  cartContainer.append(btnPay);

  finaliseBuy();

}
loadShoppingCart();

// Función para actualizar botones eliminar
function btnsDeleteUpdated() {
  btnsDelete = document.querySelectorAll(".btn-delete");
  btnsDelete.forEach((btn) => {
    btn.addEventListener("click", deleteToCart);
  });
}

// Función para eliminar productos del carrito
function deleteToCart(e) {
  const productsInCartUpdated = [];
  const idProduct = e.currentTarget.id;
  
  for(let i = 0; i< productsInCart.length;i++){
    let aux = productsInCart[i].id + "-delete";
    if(aux !== idProduct){
      productsInCartUpdated.push(productsInCart[i]);
    }
  }

  productsInCart = productsInCartUpdated;

  loadShoppingCart();
  updatedQuantity();
}

// Función para finalizar compra
function finaliseBuy(){
  document.querySelector("#btn-pay").onclick = () => {
    messageBuy.classList.add("active");
    shoppingCart.classList.remove("active");
    navbar.classList.remove('active');
  }
}
