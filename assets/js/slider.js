let onFocus = true;

window.onfocus = () => {
  onFocus = true;
};

window.onblur = () => {
  onFocus = false;
};

let totalImg = 3;
let i = 0;

const fadeToNext = () => {
  let images = [
    'assets/images/main1.png',
    'assets/images/main2.png',
    'assets/images/main3.png',
  ];

  let bgImg = document.querySelector('.bg_img');

  bgImg.style.transition = 'background 1s ease-in-out';
  bgImg.style.background = `url(${images[i]}) center no-repeat`;
  bgImg.style.backgroundSize = 'cover';
};

setInterval(() => {
  if (onFocus) {
    (i >= totalImg - 1) ? (i = 0) : i++;
    fadeToNext();
  }
}, 3000);
