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

window.addEventListener(
  'load',
  () => {
    createObserver();
  },
  false
);

function createObserver() {
  const observer = new IntersectionObserver(handleIntersect);
  observer.observe(document.querySelector('.advantages__item'));
}

function handleIntersect() {
  anime({
    targets: '.advantages__count--first-icon',
    innerText: [0, 721],
    round: 1,
    easing: 'easeOutExpo',
    duration: 1500,
  });

  anime({
    targets: '.advantages__count--second-icon',
    innerText: [0, 16],
    round: 1,
    easing: 'easeOutExpo',
    duration: 1500,
    update: function () {
      const htmlKG = document.querySelector('.advantages__count--second-icon');
      if (window.matchMedia('(max-width: 767px)').matches) {
        htmlKG.insertAdjacentHTML('beforeend', 'KG');
      } else {
        htmlKG.insertAdjacentHTML('beforeend', 'kg');
      }
    },
  });

  anime({
    targets: '.advantages__count--third-icon',
    innerText: [0, 84],
    round: 1,
    easing: 'easeOutExpo',
    duration: 1500,
  });
}
