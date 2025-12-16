const images = document.querySelectorAll('.img_colecao');
let index = 0;

images[index].classList.add('ativa');

setInterval(() => {
  images[index].classList.remove('ativa');

  index++;

  if (index >= images.length) {
    index = 0;
  }

  images[index].classList.add('ativa');
}, 3000);


//menu hamburguer
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  nav.style.display = "block";
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  nav.style.display = "none";
  menu.style.display = "block";
  close.style.display = "none";
});
