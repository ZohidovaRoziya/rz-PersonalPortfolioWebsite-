const navigationEl = document.querySelector(".navigation");
const topbarEl = document.querySelector(".topbar");
const toggleEl = document.querySelector(".toggle");
const mainEl = document.querySelector(".main");

toggleEl.onclick = function () {
  toggleEl.classList.toggle("active");
  topbarEl.classList.toggle("active");
  navigationEl.classList.toggle("active");
  mainEl.classList.toggle("active");
};
