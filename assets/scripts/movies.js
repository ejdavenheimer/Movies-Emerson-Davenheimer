import {
    mostrarTarjeta,
    crearSelectlist,
    filtrarPeliculasPorNombre,
    filtrarPeliculasPorGenero
} from "./module/funciones.js";

const $url = "https://moviestack.onrender.com/api/movies";
const init = {
    method: "GET",
    headers: {
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

let dataMovies = " ";
fetch( $url, init)
    .then( response => response.json())
    .then( datosRespuesta => {
        dataMovies = datosRespuesta.movies;

        const cardContainer = document.getElementById('cardContainer');

        mostrarTarjeta(dataMovies, cardContainer);

        const genres = dataMovies.map(film => film.genres).flat();
        const setGenres = new Set(genres);
        const arrayGenres = (Array.from(setGenres)).sort();
        arrayGenres.unshift('Genres');

        const fnReduceGenres = (template, genre) => template + crearSelectlist(genre);

        const $selectGenres = document.getElementById('genresMovies');
        $selectGenres.innerHTML = arrayGenres.reduce(fnReduceGenres, "");

        const $inputSearch = document.getElementById('inputSearch');
        $inputSearch.addEventListener('input', () => {
            const peliculasFiltradasGenero = filtrarPeliculasPorNombre(dataMovies, $inputSearch.value);
            const peliculaFiltradasNombre = filtrarPeliculasPorGenero(peliculasFiltradasGenero, $selectGenres.value);
            mostrarTarjeta(peliculaFiltradasNombre, cardContainer);
        })

        /** Filtrar por género */
        $selectGenres.addEventListener('change', () => {
            const peliculaFiltradasNombre = filtrarPeliculasPorGenero(dataMovies, $selectGenres.value);

            const peliculasFiltradasGenero = filtrarPeliculasPorNombre(peliculaFiltradasNombre, $inputSearch.value);
            mostrarTarjeta(peliculasFiltradasGenero, cardContainer);
        })

        /** Evento para agregar favorito */
        const arrayFavoritos = [];
        cardContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('boton_fav')) {
                const boton = event.target;
                const idPelicula = boton.dataset.id;
                
                if (boton.classList.contains('fa-regular')) {
                    boton.classList.remove('fa-regular');
                    boton.classList.add('fa-solid');
                    arrayFavoritos.push(idPelicula);
                } else {
                    boton.classList.remove('fa-solid');
                    boton.classList.add('fa-regular');
                    arrayFavoritos.splice(arrayFavoritos.indexOf(idPelicula), 1);
                }
            }

            localStorage.setItem('arrayFavoritos', JSON.stringify(arrayFavoritos));

        });

    })
    .catch( error => console.log(error))