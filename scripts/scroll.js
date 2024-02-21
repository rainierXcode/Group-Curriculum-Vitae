const profileObserverLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('slideOutLeft');
      entry.target.classList.add('slideInLeft');
    } else {
      entry.target.classList.remove('slideInLeft');
      entry.target.classList.add('slideOutLeft');
    }
  });
});

const profileObserverRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('slideOutRight');
      entry.target.classList.add('slideInRight');
    } else {
      entry.target.classList.remove('slideInRight');
      entry.target.classList.add('slideOutRight');
    }
  });
});

const firstLine = document.querySelectorAll('.firstLine');
const secondLine = document.querySelectorAll('.secondLine');

firstLine.forEach((box) => {
  profileObserverLeft.observe(box);
});

secondLine.forEach((box) => {
  profileObserverRight.observe(box);
});

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char, i) => {
  const bg = char.dataset.bgColor;
  const fg = char.dataset.fgColor;

  const text = new SplitType(char, { types: 'chars' });

  gsap.fromTo(
    text.chars,
    {
      color: bg,
    },
    {
      color: fg,
      duration: 0.3,
      stagger: 0.1,
      opacity: 0.2,
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse',
      },
    }
  );
});
