let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlides() {
  slides.forEach((slides) => {
    slides.style.display = 'none';
  });

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  //setTimeout(showSlides, 20000); para tiempo automatico
}

function prevSlide() {
  if (slideIndex === 1) {
    slideIndex = slides.length;
  } else {
    slideIndex--;
  }
  showSlides();
}

function nextSlide() {
  if (slideIndex === slides.length) {
    slideIndex = 1;
  } else {
    slideIndex++;
  }
  showSlides();
}

showSlides();

