//cards-slides
var currentIndex1 = 0;
var currentIndex2 = 0;
function cards_page_1(direction, icone_direction) {
    const slides = document.querySelectorAll('.card-slides');
    const totalSlides = slides.length;
    const icone = document.querySelectorAll('.icone');
    currentIndex1 = moveSlide(direction, icone_direction, currentIndex1, totalSlides, icone);
    document.querySelector('.cards').style.transform = `translateX(${currentIndex1 * -100}%)`;
}

function cards_page_2(direction, icone_direction) {
    const slides = document.querySelectorAll('.card-slides-2');
    const totalSlides = slides.length;
    const icone = document.querySelectorAll('.icone-2');
    currentIndex2 = moveSlide(direction, icone_direction, currentIndex2, totalSlides, icone);
    document.querySelector('.cards-2').style.transform = `translateX(${currentIndex2 * -100}%)`;
}

function moveSlide(direction, icone_direction, currentIndex, totalSlides, icone) {
    icone.forEach(element => {
        element.style.color = '';
    });
    icone_direction.style.color = '#30a2a2';
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    return currentIndex;
}
