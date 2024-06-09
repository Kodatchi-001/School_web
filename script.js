//cards-slides
let currentIndex = 0;
const slides = document.querySelectorAll('.card-slides');
const totalSlides = slides.length;
var icone = document.querySelectorAll('.icone')
function moveSlide(direction,icone_direction) {
    icone.forEach(element => {
        element.style.color = ''
    });
    icone_direction.style.color = '#30a2a2'
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.cards').style.transform = `translateX(${offset}%)`;
}