function numberAnimation(itemId) {
  let item = document.getElementById(itemId);
  let interval;
  let increment = 1;
  let residue = 0
  let number = Number(item.textContent);
  let counter = 0;

  if(number > 2000) {
    interval = 5;
    increment = 5;
    residue = number % increment;
    counter = residue;
  } else if(number > 500 && number <= 2000) {
    interval = 5;
  }
   else if(number <= 500) {
    interval = 150;
  }

  window.addEventListener('scroll', function startAnimation() {
    item.innerHTML = counter + residue;
    if(window.innerHeight - item.getBoundingClientRect().y > 40) {
      let animation = setInterval(function() {
        if(counter <= number) {
          item.innerHTML = counter;
          counter += increment;
        }
      }, interval);

      window.removeEventListener('scroll', startAnimation, false);
    }
  });

}

numberAnimation('appartments');
numberAnimation('clients');
numberAnimation('employees');
numberAnimation('awards');