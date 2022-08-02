let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
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
