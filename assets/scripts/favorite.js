import {
    mostrarTarjeta
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

        const arrayFavoritosLocal = JSON.parse(localStorage.getItem('arrayFavoritos'));

        const peliculasFavoritas = dataMovies.filter(peli => arrayFavoritosLocal.includes(peli.id));

        const divPeliculasFavoritas = document.getElementById('favContainer');

        mostrarTarjeta(peliculasFavoritas, divPeliculasFavoritas, 'favoritas');

        divPeliculasFavoritas.addEventListener('click', (e) => {
            if (e.target.classList.contains('boton_fav')) {

                console.log(boton);
                    arrayFavoritos.splice(arrayFavoritos.indexOf(idPelicula), 1);
                
            }

            localStorage.setItem('arrayFavoritos', JSON.stringify(arrayFavoritos));

        });

    })
    .catch( error => console.log(error))

