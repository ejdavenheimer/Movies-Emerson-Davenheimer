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
