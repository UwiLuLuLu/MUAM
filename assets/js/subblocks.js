let subBlocks = document.querySelectorAll('.sub__block');

for (let i = 0; i < subBlocks.length; i++) {
  subBlocks[i].onmouseover = () => {
    subBlocks[1].classList.toggle('active');
    subBlocks[i].classList.toggle('active');
  };

  subBlocks[i].onmouseout = () => {
    subBlocks[1].classList.toggle('active');
    subBlocks[i].classList.toggle('active');
  };
}
