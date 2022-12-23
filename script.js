const hamburger = document.querySelector(".hamburger");
const links = Array.from(document.querySelectorAll(".menu-link"));
const close = document.querySelector(".close");
const menu = document.querySelector(".mobile-nav");

const showModal = Array.from(document.querySelectorAll(".showModal"));
const closeModal = document.querySelector(".closeModal");


hamburger.addEventListener("click", () => {
  menu.classList.toggle("inactive");
});

close.addEventListener("click", () => {
  menu.classList.toggle("inactive");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("inactive");
  });
});


showModal.forEach((item) => {
  item.addEventListener("click", () => {
    popup.classList.toggle("inactive");
  });
});

closeModal.addEventListener("click", () => {
  popup.classList.toggle("inactive");
});

