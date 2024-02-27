let color1 = "#6D38E0";
let color2 = "D2CCFF";
let color3 = "FFFFFF";
let color4 = "000000";
let fontTitulo = "Bebas Neue";
let fontGeneral = "Raleway";

const cardTemplate = document.querySelector('.card');

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

const genres = dataMovies.map (film => film.genres).flat();
const setGenres = new Set( genres );
const arrayGenres = (Array.from( setGenres)).sort();

function crearSelectlist( genres ){
    return `<option value=${genres}>
                ${genres}     
            </option>`
}

const fnReduceGenres = (template, genre) => template + crearSelectlist( genre);

const $selectGenres = document.getElementById('genresMovies');
$selectGenres.innerHTML = arrayGenres.reduce( fnReduceGenres, "");

const $inputSearch = document.getElementById('inputSearch');
$inputSearch.addEventListener('input', () => {
    console.log('input bUSQUEDA:', $inputSearch.value)
    const peliculasFiltradas = filtrarPeliculasPorNombre(dataMovies, $inputSearch.value);

    removerPeliculas(peliculas, peliculasFiltradas);
})

console.log(cardTemplate)

function filtrarPeliculasPorNombre(peliculas, nombre){
    return  peliculas.filter( peli => peli.title.toLowerCase().includes(nombre.toLowerCase())).map(peli => peli.title);
}

console.log( filtrarPeliculasPorNombre(dataMovies, "fas"))


