new Swiper('.swiper', {
  speed: 500,
  effect: 'slide',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
