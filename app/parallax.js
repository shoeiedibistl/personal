let stars = document.querySelector(".dark-theme-stars");
window.addEventListener("mousemove", function (e) {
  // if (!myPage.classList.contains("dark-theme")) return;
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  stars.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
});
