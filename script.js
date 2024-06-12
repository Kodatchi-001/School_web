//navbar-responsiv
var header = document.querySelector('header');
var header_div = document.querySelectorAll('header div');
var height = '15vh'
function navbar() {
    if (header.style.height == height) {
        header.style.height = '';
        header_div[0].style.height = ''
    }
    else {
        header.style.height = height;
        header_div[0].style.height = '50%'
        navbar_link()
    }
}

function navbar_link() {
    const navbar_link = document.querySelectorAll('header div:last-child a')
    navbar_link.forEach(element => {
        element.addEventListener('click', function () {
            header.style.height = '';
            header_div[0].style.height = ''
        })
    });
}

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
//card-Students
const studentData = [
    {
        name: 'Emily Johnson',
        paragraph: 'I took a German course for 6 months. My placement test was B1 but because there was a lot of speaking practice, I felt very uncomfortable. After three weeks I got used to it. They really teach you how to speak without difficulty.'
    },
    {
        name: 'John Davis',
        paragraph: 'I embarked on a journey into the realm of German language learning six months ago. My initial placement test landed me at the B1 level, but I found myself grappling with discomfort during the speaking sessions. However.'
    },
    {
        name: 'Sophie Martinez',
        paragraph: 'Six months ago, I delved into the world of German language learning with a placement test indicating B1 proficiency. Initially, I felt a sense of unease during speaking exercises. Yet, with each passing day.'
    },
    {
        name: 'Daniel Brown',
        paragraph: 'Upon commencing a German language course half a year ago, I discovered my proficiency level to be B1. Initially, the speaking component of the course posed a considerable challenge, leaving me feeling apprehensive. However, leaving me feeling uneasy.'
    },
    {
        name: 'Ava Wilson',
        paragraph: 'Undertaking a six-month German course, my placement test categorized my proficiency at the B1 level. Initially, the speaking practice sessions presented a daunting challenge, evoking a sense of discomfort. However.'
    }
];

let currentIndex = 0;
const cardParagraphe = document.querySelector('.card-paragraphe');
const cardTitle = document.querySelector('.card-title');
const cardIcones = document.querySelectorAll('.icone-card i');

function updateContent(index) {
    cardParagraphe.textContent = studentData[index].paragraph;
    cardTitle.textContent = studentData[index].name;
}
function button_card_Student(direction) {
    currentIndex = (currentIndex + direction + studentData.length) % studentData.length;
    updateContent(currentIndex);

    cardIcones.forEach(icon => {
        icon.style.color = 'black';
    });

    switch (currentIndex) {
        case 0:
            cardIcones.forEach(icon => {
                icon.style.color = 'yellow';
            });
            break;
        case 1:
            cardIcones[0].style.color = 'yellow';
            cardIcones[1].style.color = 'yellow';
            cardIcones[2].style.color = 'yellow';
            break;
        case 2:
            cardIcones[0].style.color = 'yellow';
            cardIcones[1].style.color = 'yellow';
            cardIcones[2].style.color = 'yellow';
            cardIcones[3].style.color = 'yellow';
            break;
        case 3:
            cardIcones[0].style.color = 'yellow';
            cardIcones[1].style.color = 'yellow';
            cardIcones[2].style.color = 'yellow';
            break;
        case 4:
            cardIcones[0].style.color = 'yellow';
            cardIcones[1].style.color = 'yellow';
            break;
    }
}
