let color1 = "#6D38E0";
let color2 = "D2CCFF";
let color3 = "FFFFFF";
let color4 = "000000";
let fontTitulo = "Bebas Neue";
let fontGeneral = "Raleway";

const cardTemplate = document.getElementById('card');

const cardContainer = document.getElementById('cardContainer');

dataMovies.forEach(movie => {
    const newCard = cardTemplate.cloneNode(true);
    newCard.style.display = 'block'; 

    newCard.querySelector('#movieImage').src = movie.image;
    newCard.querySelector('#movieTitle').textContent = movie.title;
    newCard.querySelector('#movieSubtitle').textContent = movie.tagline;
    newCard.querySelector('#movieDescription').textContent = movie.overview;

    cardContainer.appendChild(newCard);
});
