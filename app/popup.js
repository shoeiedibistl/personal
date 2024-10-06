const listRefs = document.querySelectorAll(".list__item_ref");
const popup = document.querySelector(".red-square");
const closeBtn = document.querySelector(".popup-close");
const siteVersionBtns = document.querySelectorAll(".site-version");
const screen = document.querySelector(".screen");
const camera = document.querySelector(".camera");
const phoneBtn = document.querySelector(".phone-button");
const speaker = document.querySelector(".speaker");

listRefs.forEach((ref) => {
  ref.addEventListener("click", (e) => {
    if (popup.classList.contains("show")) {
      console.log("change content");

      popup.style.top = "" + e.clientY + "px";
      popup.style.left = "" + e.clientX + "px";
      return;
    }

    // popup.classList.remove("show");

    popup.style.top = "" + e.clientY + "px";
    popup.style.left = "" + e.clientX + "px";

    setTimeout(() => {
      popup.classList.add("show");
    }, 300);
  });
});

myPage.addEventListener("click", (e) => {
  if (e.target == popup) return;
  if (e.target.classList.contains("list__item_ref")) return;
  if (e.target.classList.contains("switch-btn")) return;
  if (e.target.classList.contains("switch-btn__icon")) return;
  popup.classList.remove("show");
});

popup.querySelectorAll("*").forEach((el) => el.addEventListener("click", (e) => e.stopPropagation()));
// popup.addEventListener("click", () => document.querySelector(".red-square").classList.remove("show"));

closeBtn.addEventListener("click", () => popup.classList.remove("show"));

siteVersionBtns.forEach((siteVersionBtn) =>
  siteVersionBtn.addEventListener("click", () => {
    popup.querySelector(".site-version.active").classList.remove("active");
    siteVersionBtn.classList.add("active");
    screen.classList.toggle("mobile");
    camera.classList.toggle("mobile");
    phoneBtn.classList.toggle("mobile");
    speaker.classList.toggle("mobile");
  })
);
