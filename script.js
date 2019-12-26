console.log('Connection made!');

const nextBtn = document.querySelector('.nextBtn');
const previousBtn = document.querySelector('.previousBtn');
const container = document.querySelector('.images');

let counter = 1;

nextBtn.addEventListener('click', nextSlide);
previousBtn.addEventListener('click', previousSlide);

function nextSlide() {
   container.animate([{ opacity: '0.1' }, { opacity: '1.0' }],
      { duration: 1000, fill: 'forwards' })
   if (counter === 5) {
      counter = 1;
   }
   counter++;
   container.style.backgroundImage = `url(img/img${counter}.jpg`;
}
function previousSlide() {

   container.animate([{ opacity: '0.1' }, { opacity: '1.0' }],
   {duration: 1000, fill:'forwards'})
   if (counter === 0) {
      counter = 5;
   }
   counter--;
   container.style.backgroundImage = `url(img/img${counter}.jpg`;
}