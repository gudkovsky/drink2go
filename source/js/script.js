// NAVIGATION

const headerWrapper = document.querySelector('.header__wrapper');
const headerNav = document.querySelector('.header__nav');

headerWrapper.classList.remove('no-js');
headerNav.classList.remove('no-js');
headerNav.classList.remove('active');

const burgerButton = document.querySelector('.user-box__menu');

burgerButton.addEventListener('click', () => {
  headerNav.classList.toggle('active');
  burgerButton.classList.toggle('active');
})

// SLIDER

let swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
//   navigation: {
//   nextEl: ".promo__swiper-button--left",
//   prevEl: ".promo__swiper-button--right",
// },
});
const prevBtn = document.querySelector('.promo__swiper-button--left');
const nextBtn = document.querySelector('.promo__swiper-button--right');

prevBtn.addEventListener('click', () => {
  swiper.slidePrev();
});

nextBtn.addEventListener('click', () => {
  swiper.slideNext();
});

// LEAFLET

let map = L.map('map')
.setView([59.96831, 30.31748], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: '../assets/img/icons/map-marker.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: false,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
