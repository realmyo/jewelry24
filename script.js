document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slideshow');
  const indicators = document.querySelectorAll('.indicator');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = '0';
      slide.style.transform = 'scale(0.9)';
      if (i === index) {
        slide.style.opacity = '1';
        slide.style.transform = 'scale(1)';
      }
    });

    indicators.forEach((indicator, i) => {
      indicator.classList.remove('active');
      if (i === index) {
        indicator.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }

  // slideshow
  showSlide(currentIndex);

  // changes slides
  const slideInterval = setInterval(nextSlide, 5000);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      clearInterval(slideInterval); // stop
      goToSlide(index);
      setInterval(nextSlide, 5000); // sliding
    });
  });
});
const languageSelector = document.getElementById('language-selector');
const languageOptions = document.querySelector('.language-options');
const langButton = languageSelector.querySelector('button');

langButton.addEventListener('click', () => {
  languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
});
