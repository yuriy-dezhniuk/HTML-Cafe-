function openCloseMenu() {
  let burgerBtn = document.getElementById('burger');
  let menu = document.getElementById('nav');

  function changeMenuVisibility() {
    if(menu.style.display == '') {
      menu.style.animation = '';
      menu.style.display = 'block';
      setTimeout(() => {menu.style.animation = 'display-menu 0.8s linear'}, 800);
    } else{
      menu.style.animation = '';
      menu.style.animation = 'hidden-menu 0.6s linear';
      setTimeout(() => {menu.style.display = ''}, 500);
    }
  }

  burgerBtn.addEventListener('click', changeMenuVisibility);
}

//burgerAnimation
function burgerAnimation() {
  let element = document.getElementById("burger");
  element.classList.toggle("burger-open");
	element.classList.toggle("burger-closed");
}

openCloseMenu();