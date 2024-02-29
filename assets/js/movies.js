let color1 = "#6D38E0";
let color2 = "D2CCFF";
let color3 = "FFFFFF";
let color4 = "000000";
let fontTitulo = "Bebas Neue";
let fontGeneral = "Raleway";

const cardTemplate = document.querySelector('.card');
const cardContainer = document.getElementById('cardContainer');

mostrarTarjeta(dataMovies);
function crearTarjeta(movie){
    return ` 
            <div class="card w-1/5 h-96 rounded-lg bg-white shadow-md p-4">
                <img class="movieImage" src="${movie.image}" alt="Movie image">
                <div class="movie__information">
                    <h6 class="movieTitle font-bold mt-2 tracking-wider text-lg">${movie.title}</h6>
                    <p class="movieSubtitle italic mb-2 ">${movie.tagline}</p>
                    <p class="movieDescription description h-28 text-sm">${movie.overview}</p>
                </div>
            </div>`
}
function mostrarTarjeta(movies){
    let template = "";

    for(const peliculaIterada of movies){
        template += crearTarjeta(peliculaIterada);
    }
    this.cardContainer.innerHTML = template;
}

/** Obtener todos los géneros de las películas */
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

    mostrarTarjeta(peliculasFiltradas);
})


function filtrarPeliculasPorNombre(peliculas, nombre){
    return  peliculas.filter( peli => peli.title.toLowerCase().includes(nombre.toLowerCase()));
}
