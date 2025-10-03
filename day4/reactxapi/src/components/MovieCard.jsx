import {HeartIcon} from '../icons/icons'

function MovieCard({movie}){
  function onFavoriteClick(){
    alert('clicked')
  }

  return (
    <>
      <div className="movie-card bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-300">
        {/* Poster */}
        <div className="movie-poster relative">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.original_title} 
            className="w-full h-64 object-cover"
          />

          {/* Overlay */}
          <div className="movie-overlay absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
            <button className="favorite-btn bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
              <HeartIcon />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="movie-info p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {movie.original_title}
          </h3>
          <p className="text-gray-500 text-sm">
            {movie.release_date?.split('-').slice(0, 3).join(' ')}
          </p>
        </div>
      </div>
    </>
  )
}

export default MovieCard