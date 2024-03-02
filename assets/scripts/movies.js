import {
    mostrarTarjeta,
    crearSelectlist,
    filtrarPeliculasPorNombre,
    filtrarPeliculasPorGenero
} from "./module/funciones.js";

const cardTemplate = document.querySelector('.card');
const cardContainer = document.getElementById('cardContainer');

mostrarTarjeta(dataMovies);

/** Obtener todos los géneros de las películas */
const genres = dataMovies.map(film => film.genres).flat();
const setGenres = new Set(genres);
const arrayGenres = (Array.from(setGenres)).sort();

const fnReduceGenres = (template, genre) => template + crearSelectlist(genre);

const $selectGenres = document.getElementById('genresMovies');
$selectGenres.innerHTML = arrayGenres.reduce(fnReduceGenres, "");

const $inputSearch = document.getElementById('inputSearch');
$inputSearch.addEventListener('input', () => {
    const peliculasFiltradasGenero = filtrarPeliculasPorNombre(dataMovies, $inputSearch.value);
    const peliculaFiltradasNombre = filtrarPeliculasPorGenero(peliculasFiltradasGenero, $selectGenres.value);
    mostrarTarjeta(peliculaFiltradasNombre);
})

/** Filtrar por género */
$selectGenres.addEventListener('change', () => {
    const peliculaFiltradasNombre = filtrarPeliculasPorGenero(dataMovies, $selectGenres.value);

    const peliculasFiltradasGenero = filtrarPeliculasPorNombre(peliculaFiltradasNombre, $inputSearch.value);
    mostrarTarjeta(peliculasFiltradasGenero);
})