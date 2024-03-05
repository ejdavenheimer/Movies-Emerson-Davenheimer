export function crearTarjeta(movie){
    return ` 
            <div class="card w-8/12 md:w-3/12 lg:w-1/5 md:h-96 rounded-lg bg-white relative shadow-md p-4">
                <i data-id="${movie.id}" class="boton_fav fa-regular fa-heart fa-xl absolute right-1 bottom-4" style="color: #f82020;"></i>
                <img class="movieImage" src="https://moviestack.onrender.com/static/${movie.image}" alt="Movie image">
                <div class="movie__information">
                    <a href="../../pages/movieData.html?id=${movie.id}" class="movieTitle font-bold mt-2 tracking-wider text-lg">${movie.title}</a>
                    <p class="movieSubtitle italic mb-2 ">${movie.tagline}</p>
                    <p class="movieDescription description h-28 text-sm">${movie.overview}</p>
                </div>
            </div>`
}

export function mostrarTarjeta(movies, contenedor, espacio){
    let template = "";

    for(const peliculaIterada of movies){
        template += crearTarjeta(peliculaIterada);
    }
    if(movies.length == 0){
        if(espacio === 'favoritas'){
            template = `<h2 class="h-72 flex items-center text-xl">There are no movies added to favorites.</h2>`;
        } else{
            template = `<h2 class="h-72 flex items-center text-xl">The specified movie could not be found.</h2>`;
        }
        
    }
    contenedor.innerHTML = template;
}

export function crearSelectlist( genres ){
    return `<option value="${genres}">
                ${genres}     
            </option>`
}

export function filtrarPeliculasPorNombre(peliculas, nombre){
    return  peliculas.filter( peli => peli.title.toLowerCase().includes(nombre.toLowerCase()));
}

export function filtrarPeliculasPorGenero(peliculas, genero){
    if(genero === 'Genres'){
        return peliculas;
    } else{
        return peliculas.filter(peli => peli.genres.includes(genero));
    }
}

