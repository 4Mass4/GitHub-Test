// Parametry
let activeElement = 0;
const timeChange = 4000;

// Pobieram 4 elementy na których pracuje
const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Anna Baugart', 'Marek Feliksiak', 'Arek Pawłowicz'];
const professions = ['Programistka JS', 'UX i UI designer', 'Front-End Developer'];

// Informacje w tablicach o elementach podmienianych
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

// Funkcja zmiany wygladu
function changeElement () {
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }

    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];
}

// Uruchomienie funkcji
setInterval(changeElement, timeChange) // Wykonywanie w nieskonczonosc
