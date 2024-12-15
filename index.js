const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 10000,
  },
});
const slider = document.querySelector(".swiper").swiper;
const prev = document.querySelector(".swipe-prev");
const next = document.querySelector(".swipe-next");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("openHam");
});
prev.addEventListener("click", () => {
  slider.slidePrev();
});
next.addEventListener("click", () => {
  slider.slideNext();
});
