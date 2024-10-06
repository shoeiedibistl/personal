const myPage = document.querySelector(".html");
const mySite = document.querySelector(".site");
const myMain = document.querySelector(".main");
const shoeiedibistlSpan = document.querySelector(".shoeiedibistl__span");
const bestSpan = document.querySelector(".best__span");
const switchBtn = document.querySelector(".switch-btn");
const switchIcons = switchBtn.querySelectorAll(".switch-btn__icon");
const switchInner = switchBtn.querySelector(".switch-btn__inner");
const toastyBtn = document.querySelector(".toasty");
const toastyImg = document.querySelector(".toasty-img");
// const eyes = document.querySelectorAll(".eye");

// let isDarkTheme = false;

window.onload = function () {
  setTimeout('shoeiedibistlSpan.classList.add("show")', 500);
  // setTimeout('bestSpan.classList.add("show")', 2500);
  setTimeout('bestSpan.classList.add("show")', 2000);
  setTimeout(() => myMain.classList.add("show"), 6000);
  setTimeout(() => switchBtn.classList.add("show"), 8000);
};

switchBtn.addEventListener("click", () => {
  setTimeout("switchTheme()", 300);
  // switchInner.classList.add(isDarkTheme ? "switch-btn__inner--anim-out" : "switch-btn__inner--anim-in");
  switchInner.classList.add(myPage.classList.contains("dark-theme") ? "switch-btn__inner--anim-out" : "switch-btn__inner--anim-in");
  setTimeout('switchInner.classList.remove("switch-btn__inner--anim-in"); switchInner.classList.remove("switch-btn__inner--anim-out")', 1000);
  switchIcons[0].classList.toggle("switch-btn__icon_active");
  switchIcons[1].classList.toggle("switch-btn__icon_active");
  chillTimeout(switchBtn, 1000);
  eyes.forEach((eye) => eye.classList.toggle("rotate"));
  stars.classList.toggle("show");
});

switchTheme = () => myPage.classList.toggle("dark-theme");

toastyBtn.addEventListener("click", () => {
  toastyImg.classList.add("toasty-img_show");
  setTimeout(() => toastyImg.classList.remove("toasty-img_show"), 1000);
  const audio = new Audio();
  audio.src = "sounds/toasty.mp3";
  audio.volume = 0.1;
  audio.autoplay = true;
  chillTimeout(toastyBtn, 2000);
});

function chillTimeout(element, timeout) {
  element.setAttribute("disabled", "");
  setTimeout(() => element.removeAttribute("disabled"), timeout);
}
