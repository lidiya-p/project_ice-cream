anime({
  targets: '.menu-button',
  rotate: '1turn',
  duration: 2000,
  delay: 1000,
});

anime({
  targets: '.hero__ellipse',
  easing: 'easeInOutSine',
  scale: [1, 0.9],
  loop: true,
  direction: 'alternate',
});
