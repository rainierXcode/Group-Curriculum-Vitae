const graditudeObserver = new IntersectionObserver(
  (entries) => {
    const allText = document.querySelectorAll('#graditudeShape > div');
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        allText.forEach((text) => {
          text.classList.add('fadeInUp');
          text.classList.remove('fadeOutDown');
        });
      } else {
        allText.forEach((text) => {
          text.classList.add('fadeOutDown');
          text.classList.remove('fadeInUp');
        });
      }
    });
  },
  { threshold: 0.5 }
);

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

graditudeObserver.observe(document.getElementById('gratitudeMeet'));
const firstLine = document.querySelectorAll('.firstLine');
const secondLine = document.querySelectorAll('.secondLine');

firstLine.forEach((box) => {
  profileObserverLeft.observe(box);
});

secondLine.forEach((box) => {
  profileObserverRight.observe(box);
});
