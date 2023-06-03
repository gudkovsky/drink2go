// NAVIGATION

const headerWrapper = document.querySelector('.header__wrapper');
const headerNav = document.querySelector('.header__nav');
const navItem = document.querySelectorAll('.nav__item')

headerWrapper.classList.remove('no-js');
headerNav.classList.remove('no-js');
headerNav.classList.remove('active');

const burgerButton = document.querySelector('.user-box__menu');

burgerButton.addEventListener('click', () => {
  headerNav.classList.toggle('active');
  burgerButton.classList.toggle('active');
})

navItem.forEach((el) => {
  el.addEventListener('click', () => {
    headerNav.classList.remove('active');
    burgerButton.classList.remove('active');
  })
})


// SLIDER

let swiper = new Swiper(".swiper", {
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

// CUSTOM SELECT

const selectPick = document.querySelector('.select__pick')
const selectList = document.querySelector('.select__list')
const selectItem = document.querySelectorAll('.select__item')

selectPick.addEventListener('click', () => {
  selectList.classList.toggle('dropdown-active')
  selectPick.classList.toggle('active')
})

selectItem.forEach((el) => {
  if (el.innerText == selectPick.innerText) {
    el.classList.add('chosen')
  };

  el.addEventListener('click', () => {
    selectList.classList.toggle('dropdown-active');
    selectPick.classList.toggle('active');

    console.log('выбран тип сортировки:', el.innerText);
  })
})

// CUSTOM PAGINATION

const pageLinks = document.querySelectorAll('.pagination__page');
const prevPageButton = document.querySelector('.pagination__button--prev');
const nextPageButton = document.querySelector('.pagination__button--next');

const handleActivePage = function () {
  if (pageLinks[0].classList.contains('pagination__page--current')) {
    prevPageButton.classList.add('js-hidden')
  } else {prevPageButton.classList.remove('js-hidden')}
  if (pageLinks[pageLinks.length-1 ].classList.contains('pagination__page--current')) {
    nextPageButton.classList.add('js-hidden')
  } else {nextPageButton.classList.remove('js-hidden')}
};

pageLinks.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault()
    pageLinks.forEach(el => el.classList.remove('pagination__page--current'))
    link.classList.add('pagination__page--current')
    handleActivePage();
  })
})

prevPageButton.addEventListener('click', () => {
  let index = -1;
for (let i = 0; i < pageLinks.length; i++) {
  if (pageLinks[i].classList.contains('pagination__page--current')) {
    index = i;
    break;
  }
}

if (index !== -1) {
  pageLinks[index].classList.remove('pagination__page--current');
  pageLinks[index-1].classList.add('pagination__page--current');
  handleActivePage();
} else {
  return
}
})

nextPageButton.addEventListener('click', () => {
  let index = -1;
for (let i = 0; i < pageLinks.length; i++) {
  if (pageLinks[i].classList.contains('pagination__page--current')) {
    index = i;
    break;
  }
}

if (index !== -1) {
  pageLinks[index].classList.remove('pagination__page--current');
  pageLinks[index+1].classList.add('pagination__page--current');
  handleActivePage();
} else {
  return
}
})
