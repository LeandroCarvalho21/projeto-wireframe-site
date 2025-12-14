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

