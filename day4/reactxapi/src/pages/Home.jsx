import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"

function Home(){
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const loadPopularMovies = async () => {
      try {
        const movies = await getPopularMovies()
        setMovies(movies)
      } catch (error) {
          console.log(error);
          setError('failed load movies')
      } finally{
          setLoading(false)
      }
    }

    loadPopularMovies()
  }, [])

  const handleSearch = async (e)=>{
    e.preventDefault()
    if (!searchQuery.trim()) return
    if (loading) return
    setLoading(true)

    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch (error) {
      console.log(error);
      setError('failed to search movies...')
    } finally{
      setLoading(false)
    }
  }

  return (
    <div className="home max-w-6xl mx-auto p-6">
      {/* Search Form */}
      <form 
        action="" 
        onSubmit={handleSearch} 
        className="search-form flex mb-6"
      >
        <input 
          type="text" 
          placeholder="Search for movies..." 
          className="search-input flex-1 border border-gray-300 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button 
          type="submit" 
          className="search-button bg-blue-500 text-white px-6 rounded-r-lg hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home