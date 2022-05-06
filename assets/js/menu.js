let menuButton = document.querySelector('.menu__button');
let mobileMenu = document.querySelector('.mobile__menu');
let header = document.querySelector('header');
let returnButton = mobileMenu.querySelector('.back__button');

menuButton.onclick = () => {
  if (window.screen.availWidth > 768) {
    let items = document.querySelector('.list-inline');
    items.classList.toggle('hidden');

    if (!items.classList.contains('hidden')) {
      items.style.transition = 'opacity .3s linear';
      menuButton.style.transition = 'all .2s ease-in-out';

      menuButton.onmouseover = () => {
        menuButton.style.transform = 'rotate(0deg)';
      };

      menuButton.onmouseout = () => {
        menuButton.style.transform = 'rotate(90deg)';
      };
    } else {
      menuButton.style.transition = 'all .2s ease-in-out';

      menuButton.onmouseover = () => {
        menuButton.style.transform = 'rotate(90deg)';
      };

      menuButton.onmouseout = () => {
        menuButton.style.transform = 'rotate(0deg)';
      };
    }
  } else if (window.screen.availWidth <= 992) {
    if (mobileMenu.style.display !== 'block') {
      mobileMenu.style.display = 'block';
      window.scrollTo(window.pageYOffset, 0);
      document.body.style.overflow = 'hidden';
    }
  }
};

returnButton.onclick = () => {
  mobileMenu.style.display = 'none';
  document.body.style.overflow = '';
};
