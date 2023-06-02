var swiper = new Swiper(".mySwiper", {
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
