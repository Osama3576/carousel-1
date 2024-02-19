const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const watchImages = document.querySelectorAll('.carousel-image');
const watchName = document.querySelector('.watch-name');
const watchPrice = document.querySelector('.watch-price');

const images = [
  './IMAGES/WATCH-1.png',
  './IMAGES/WATCH-2.png',
  './IMAGES/WATCH-3.png',
];

const watchData = [
  { name: 'Patek Philippe', price: 7999 },
  { name: 'Audemars Piguet', price: 8999 },
  { name: 'Vacheron Constantin', price: 9999 },
];

let currentIndex = 0;

updateWatch(currentIndex);

btnLeft.addEventListener('click', () => movePrev());
btnRight.addEventListener('click', () => moveNext());

function movePrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateWatch(currentIndex);
}
function moveNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateWatch(currentIndex);
}

function updateWatch(index) {
  const nextIndex = (index + 1) % images.length;
  const prevIndex = (index - 1 + images.length) % images.length;

  watchImages[0].style.opacity = 0;
  watchImages[2].style.opacity = 0;

  setTimeout(() => {
    watchImages[1].src = images[index];
    watchImages[1].style.opacity = 1;
  }, 100);

  setTimeout(() => {
    watchImages[0].src = images[prevIndex];
    watchImages[2].src = images[prevIndex];
    watchImages[0].style.opacity = 1;
    watchImages[2].style.opacity = 1;
  }, 200);

  watchName.textContent = watchData[index].name;
  watchPrice.textContent = `$ ${watchData[index].price}`;
}
