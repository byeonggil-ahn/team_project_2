'use strict';

//change about_container when scroll down

let observer = new IntersectionObserver((e) => {
  e.forEach((event) => {
    if (event.isIntersecting) {
      event.target.style.opacity = 1;
    } else {
      event.target.style.opacity = 0;
    }
  });
});

const div = document.querySelectorAll('.about__container');
const eco = document.querySelector('.about__eco');

observer.observe(div[0]);
observer.observe(div[1]);
observer.observe(div[2]);
observer.observe(eco);
