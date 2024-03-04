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

        /** SELECCIONAR PELÍCULA Y CAPTURAR SUS DATOS */
const urlParamPelicula = new URLSearchParams( location.search );
const idPelicula = urlParamPelicula.get('id');

console.log(idPelicula);

const peliculaSeleccionada = dataMovies.find( pelicula => pelicula.id == idPelicula);
console.log(peliculaSeleccionada);

const $layoutDetalles = document.getElementById('layout_detalles');
$layoutDetalles.innerHTML = 
        `<div class="w-5/12">
        <img class="" src="https://moviestack.onrender.com/static/${peliculaSeleccionada.image}" alt="Image from de the movie ${peliculaSeleccionada.title}">
        <table>
            <tbody>
                <tr>
                    <td>Original language</td>
                    <td>${peliculaSeleccionada.original_language}</td>
                </tr>
                <tr>
                    <td>Release date</td>
                    <td>${peliculaSeleccionada.release_date}</td>
                </tr>
                <tr>
                    <td>Runtime</td>
                    <td>${peliculaSeleccionada.runtime} mins</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>${peliculaSeleccionada.status}</td>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="w-5/12">
        <h3>${peliculaSeleccionada.title}</h3>
        <span>${peliculaSeleccionada.tagline}</span>
        <span>${peliculaSeleccionada.genres}</span>
        <p>${peliculaSeleccionada.overview}</p>

        <table>
            <tbody>
                <tr>
                    <td>Vote average</td>
                    <td>${peliculaSeleccionada.vote_average}%</td>
                </tr>
                <tr>
                    <td>Budget</td>
                    <td>USD ${peliculaSeleccionada.budget.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Revenue</td>
                    <td>USD ${peliculaSeleccionada.revenue.toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
        </div>`;
        
    })
    .catch( error => console.log(error))


        /** Cambiar evento de la búsqueda de peli para que solo se active al tocar la lupa */

        /** Filtrar por género y nombre 
         * 
         * LISTO, PERO HACE FALTA QUE EN LA PRIMERA CARGA DE LA PÁGINA NO FILTRE NADA AÚN, PORQUE QUEDA FILTRADO 
         * EL GÉNERO DE LA PELI DESDE EL ARRANQUE
        */

        /** FALTA CAMBIAR EL DISEÑO */

        /**LLEVAR ESTO A UNA RAMA DE SPRIN2 Y LUEGO A DEV */


        /** FUSIONAR RAMAS: 
         * 1- Me pongo en la rama que quiero incorporar los cambios con git switch RAMA
         * 2- git merge LaRamaQueNosQueremosTraer */

        /** CREAR RAMA REMOTA
         * - git push origin nombreDeRama
         */

        /** let color1 = "#6D38E0";
            let color2 = "D2CCFF";
            let color3 = "FFFFFF";
            let color4 = "000000";
            let fontTitulo = "Bebas Neue";
            let fontGeneral = "Raleway"; */