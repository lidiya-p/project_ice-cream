anime({
  targets: '.menu-button',
  rotate: '1turn',
  duration: 2000,
  delay: 1000,
});

anime({
  targets: '.hero__img__icecram',
  translateX: 50,
  direction: 'alternate',
  loop: true,
  easing: 'spring(2, 90, 10, 1)',
});

anime({
  targets: '.hero__title',
  scale: [2, 1],
});