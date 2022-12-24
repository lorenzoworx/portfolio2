const hamburger = document.querySelector('.hamburger');
const links = Array.from(document.querySelectorAll('.menu-link'));
const close = document.querySelector('.close');
const menu = document.querySelector('.mobile-nav');

const showModal = Array.from(document.querySelectorAll('.showModal'));
const closeModal = document.querySelector('.closeModal');
const pops = document.querySelector('.popSection');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('inactive');
});

close.addEventListener('click', () => {
  menu.classList.toggle('inactive');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('inactive');
  });
});

showModal.forEach((item) => {
  item.addEventListener('click', () => {
    pops.classList.toggle('inactive');
  });
});

closeModal.addEventListener('click', () => {
  pops.classList.toggle('inactive');
});
const feedbackForm = document.getElementById('feedback');
const mail = document.getElementById('mail');
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (mail.value.toLowerCase() !== mail.value) {
    document.getElementById('errorMsg').classList.toggle('inactive');
  } else {
    feedbackForm.submit();
  }
});
