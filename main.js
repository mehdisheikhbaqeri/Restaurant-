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

//slider
let sliderImage = document.querySelector("img");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let imgSrcArray = [
  "images/g-1.jpg",
  "images/g-2.jpg",
  "images/g-3.jpg",
  "images/g-4.jpg",
  "images/g-5.jpg",
  "images/g-6.jpg",
  "images/g-7.jpg",
  "images/g-8.jpg",
  "images/g-9.jpg",
];
let imgIndex = 0;
function prevImage() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgSrcArray.length - 1;
  }
  sliderImage.setAttribute("src", imgSrcArray[imgIndex]);
  console.log(imgIndex, imgSrcArray[imgIndex]);
}

function nextImage() {
  imgIndex++;
  if (imgIndex > imgSrcArray.length - 1) {
    imgIndex = 0;
  }

  sliderImage.setAttribute("src", imgSrcArray[imgIndex]);
  console.log(imgIndex, imgSrcArray[imgIndex]);
}

setInterval(nextImage, 3000);

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
