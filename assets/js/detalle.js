/** SELECCIONAR PELÍCULA Y CAPTURAR SUS DATOS */
const urlParamPelicula = new URLSearchParams( location.search );
const idPelicula = urlParamPelicula.get('id');

console.log(idPelicula);

const peliculaSeleccionada = dataMovies.find( pelicula => pelicula.id == idPelicula);
console.log(peliculaSeleccionada);

const $layoutDetalles = document.getElementById('layout_detalles');
$layoutDetalles.innerHTML = 
        `<div class="w-5/12">
        <img class="" src="${peliculaSeleccionada.image}" alt="Image from de the movie ${peliculaSeleccionada.title}">
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
                    <td>${peliculaSeleccionada.vote_average}</td>
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


        /** FALTA MODULARIZAR Y CAMBIAR EL DISEÑO */


        /**LLEVAR ESTO A UNA RAMA DE SPRIN2 Y LUEGO A DEV */