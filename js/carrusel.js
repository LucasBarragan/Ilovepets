const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

/* Ancho del slide */
const slideWidth = slides[0].getBoundingClientRect().width;

/* Pone los slides uno a lado del otro */
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

let currentIndex = 0;

/* // Función para mover el track */
function moveToSlide(index) {
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
}

/* // Botón siguiente */
btnNext.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
    moveToSlide(currentIndex + 1);
    }
});

/* // Botón anterior */
btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
    moveToSlide(currentIndex - 1);
    }
});
