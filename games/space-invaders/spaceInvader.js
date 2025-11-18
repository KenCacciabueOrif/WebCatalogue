const enemy = document.querySelector('.ennemy-1');
let toggle = false;

setInterval(() => {
  toggle = !toggle;
  if(toggle) {
    enemy.classList.add('blink-2');
    enemy.classList.remove('blink-1');
  } else {
    enemy.classList.add('blink-1');
    enemy.classList.remove('blink-2');
  }
}, 500); // 500ms per frame