function scrolling() {
  let scrollBtn = document.querySelector('.scroll-down');
  let navbar = document.querySelector('.inner');

  function scrollAnimation() {
    let navbarHeight = navbar.offsetHeight;
    let scrollDistance = (window.innerHeight - navbar.offsetHeight);
    let interval = 5;
    let distance = 1;

    let timerID = setInterval(function() {
      window.scroll(0, distance);
      distance += 10;
      if(distance >= (scrollDistance + 14)) {
        stopInterval();
        distance = 20;
      }
    }, interval);

    function stopInterval() {
      clearInterval(timerID);
    }
  }
  
  scrollBtn.addEventListener('click', scrollAnimation);
}

scrolling();