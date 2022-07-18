anime({
  targets: '.menu-button',
  rotate: '1turn',
  duration: 2000,
  delay: 1000,
});

anime({
  targets: '.hero__img__icecram',
  easing: 'easeInOutSine',
  scale: [1, 0.9],
  loop: true,
  direction: 'alternate',
});


anime({
  targets: '.hero__title',
  scaleX: [2, 1],
  easing: 'easeInOutSine',
});