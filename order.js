let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  menu.style.color = "#fff";
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  menu.style.color = "#000";
};

// dark navbar scroll

document.addEventListener("scroll", function () {
  console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop > 0) {
    logo.style.height = "20px";
    header.classList.add("bg-black");
    header.classList.add("txt-white");
  } else {
    logo.style.height = "35px";
    header.classList.remove("bg-black");
    header.classList.remove("txt-white");
  }
});

//order
let products = [
  {
    id: 1,
    title: "Burger Economy",
    price: 8,
    img: "./Images/order/Burger Economy.jpg",
    count: 1,
  },
  {
    id: 2,
    title: "Burger Spetioal",
    price: 23,
    img: "./Images/order/Burger Vip.jfif",
    count: 1,
  },
  {
    id: 3,
    title: "Burger Cheese",
    price: 10,
    img: "./Images/order/Chees Burger.jpg",
    count: 1,
  },
  {id: 4,title: "Dubl Burger",price: 16,img: "./Images/order/Dubl Burger.jfif",count: 1},
  {id: 5,title: "Cake Black ",price: 32,img: "./Images/order/black Forest.jfif",count: 1},
  {id: 6,title: "Cake Strawberry",price: 35.8,img: "./Images/order/strawberry.jpg",count: 1},
  {id: 7,title: "Cake Blackberry",price: 33.5,img: "./Images/order/blackberry.jpg",count: 1},
  {id: 8,title: "Cake Spetioal",price: 84,img: "./Images/order/the best.jpg",count: 1},
  {id: 8,title: "Arabic Sweets",price: 11,img: "./Images/order/arabic sweet.jfif",count: 1},
  {id: 8,title: "Chocolate",price: 3.5,img: "./Images/order/chocolate.jfif",count: 1},
  {id: 8,title: "Indian Sweets",price: 17,img: "./Images/order/indian sweets.jpg",count: 1},
  {id: 8,title: "Sweets's Dish",price: 45,img: "./Images/order/sweet dish.jfif",count: 1},
];

let userBasket = [];

const shopContainer = document.querySelector(".shop-items");
const basketProductsContainer = document.querySelector(".cart-items");
const removeAllProduct = document.querySelector("#remove-all-product");
const cartTotalPrice = document.querySelector(".cart-total-price");

products.forEach(function (product) {
  let productContainer = document.createElement("div");
  productContainer.classList.add("shop-item");

  let productTitle = document.createElement("span");
  productTitle.classList.add("shop-item-title");
  productTitle.textContent = product.title;

  let productImg = document.createElement("img");
  productImg.classList.add("shop-item-image");
  productImg.setAttribute("src", product.img);
  productImg.setAttribute("width", "200");
  productImg.setAttribute("height", "100");

  let productDetails = document.createElement("div");
  productDetails.classList.add("shop-item-details");

  let productPrice = document.createElement("span");
  productPrice.textContent = product.price + " $";
  productPrice.classList.add("shop-item-price");

  let productButton = document.createElement("button");
  productButton.textContent = "Add To Cart";
  productButton.className = "button button-primary shop-item-button";
  productButton.addEventListener("click", function () {
    addProductArray(product.id);
  });

  productDetails.append(productPrice, productButton);
  productContainer.append(productTitle, productImg, productDetails);
  shopContainer.append(productContainer);
});

function addProductArray(productId) {
  let mainProduct = products.find(function (product) {
    return product.id === productId;
  });

  userBasket.push(mainProduct);

  basketProduct(userBasket);
  carcTotalPrice(userBasket);

  console.log(userBasket);
}

function basketProduct(userBasketArray) {
  basketProductsContainer.textContent = "";

  userBasketArray.forEach(function (product) {
    let basketProductContainer = document.createElement("div");
    basketProductContainer.classList.add("cart-row");

    let basketProductDetails = document.createElement("div");
    basketProductDetails.className = "cart-item cart-column";

    let basketProductImage = document.createElement("img");
    basketProductImage.setAttribute("src", product.img);
    basketProductImage.setAttribute("width", "100");
    basketProductImage.setAttribute("height", "50");
    basketProductImage.classList.add("cart-item-image");

    let basketProductTitle = document.createElement("span");
    basketProductTitle.classList.add("cart-item-title");
    basketProductTitle.textContent = product.title;

    basketProductDetails.append(basketProductImage, basketProductTitle);

    let basketProductPrice = document.createElement("span");
    basketProductPrice.className = "cart-price cart-column";
    basketProductPrice.textContent = product.price;

    let basketProductInputContainer = document.createElement("div");
    basketProductInputContainer.className = "cart-quantity cart-column";

    let basketProductInput = document.createElement("input");
    basketProductInput.className = "cart-quantity-input";
    basketProductInput.value = product.count;
    basketProductInput.setAttribute("type", "number");
    basketProductInput.setAttribute("min", "1");
    basketProductInput.addEventListener("change", function () {
      updateProduct(product.id, basketProductInput.value);
    });

    let basketProductRemove = document.createElement("button");
    basketProductRemove.className = "button button-danger";
    basketProductRemove.textContent = "Remove";
    basketProductRemove.addEventListener("click", function () {
      removeProductBasket(product.id);
    });

    basketProductInputContainer.append(basketProductInput, basketProductRemove);
    basketProductContainer.append(
      basketProductDetails,
      basketProductPrice,
      basketProductInputContainer
    );
    basketProductsContainer.append(basketProductContainer);
  });
}
function removeProductBasket(prodoctId) {
  userBasket = newUserBasket = userBasket.filter(function (product) {
    return product.id !== prodoctId;
  });

  basketProduct(userBasket);

  console.log(userBasket);
}

removeAllProduct.addEventListener("click", function () {
  userBasket = [];
  basketProduct(userBasket);
});

function carcTotalPrice(userBasketArray) {
  let totalPriceValue = 0;

  userBasketArray.forEach(function (product) {
    totalPriceValue += product.count * product.price;
  });

  cartTotalPrice.textContent = totalPriceValue;
}

function updateProduct(prodoctId, newCount) {
  console.log("product id:" + prodoctId + "new count:" + newCount);

  userBasket.forEach(function (product) {
    if (product.id === prodoctId) {
      product.count = newCount;
    }
  });
  carcTotalPrice(userBasket);
}
