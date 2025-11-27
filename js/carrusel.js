const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let index = 0; /*  posición actual */

function mostrarSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

/* Botón siguiente */
btnNext.addEventListener('click', () => {
    if (index < slides.length - 1) {
        index++;
        mostrarSlide();
    }
});

/*  Botón anterior */
btnPrev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        mostrarSlide();
    }
});
