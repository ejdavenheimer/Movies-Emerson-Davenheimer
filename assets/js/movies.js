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
                    <a href="../../pages/movieData.html?id=${movie.id}" class="movieTitle font-bold mt-2 tracking-wider text-lg">${movie.title}</a>
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
    if(movies.length == 0){
        template = `<h2 class="h-72 flex items-center text-xl">The specified movie could not be found.</h2>`;
    }
    this.cardContainer.innerHTML = template;
}

/** Obtener todos los géneros de las películas */
const genres = dataMovies.map (film => film.genres).flat();
const setGenres = new Set( genres );
const arrayGenres = (Array.from( setGenres)).sort();

function crearSelectlist( genres ){
    return `<option value="${genres}">
                ${genres}     
            </option>`
}

const fnReduceGenres = (template, genre) => template + crearSelectlist( genre);

const $selectGenres = document.getElementById('genresMovies');
$selectGenres.innerHTML = arrayGenres.reduce( fnReduceGenres, "");


const $inputSearch = document.getElementById('inputSearch');
$inputSearch.addEventListener('input', () => {
    const peliculasFiltradasGenero = filtrarPeliculasPorNombre(dataMovies, $inputSearch.value);
    const peliculaFiltradasNombre = filtrarPeliculasPorGenero(peliculasFiltradasGenero, $selectGenres.value);
    mostrarTarjeta(peliculaFiltradasNombre);
})


function filtrarPeliculasPorNombre(peliculas, nombre){
    return  peliculas.filter( peli => peli.title.toLowerCase().includes(nombre.toLowerCase()));
}


/** Cambiar evento de la búsqueda de peli para que solo se active al tocar la lupa */
/** Filtrar por género */
$selectGenres.addEventListener('change', () =>{
    const peliculaFiltradasNombre = filtrarPeliculasPorGenero(dataMovies, $selectGenres.value);
    
    const peliculasFiltradasGenero = filtrarPeliculasPorNombre(peliculaFiltradasNombre, $inputSearch.value);
    mostrarTarjeta(peliculasFiltradasGenero);
})

function filtrarPeliculasPorGenero(peliculas, genero){
    return peliculas.filter(peli => peli.genres.includes(genero));

}


/** Filtrar por género y nombre 
 * 
 * LISTO, PERO HACE FALTA QUE EN LA PRIMERA CARGA DE LA PÁGINA NO FILTRE NADA AÚN, PORQUE QUEDA FILTRADO 
 * EL GÉNERO DE LA PELI DESDE EL ARRANQUE
*/

/** LOS DATAMOVIES QUE NO TOMEN LOS DEL JS, SINO QUE SE GENERE EN CADA FUNCION */

/** Crear página única por película */