import { useEffect, useState } from 'react'
import { getMovieList, searchMovie } from './api'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const search = (q) => {
    if (q.length > 0) {
      const searchData = async () => {
        const searchedMovies = await searchMovie(q)
        setMoviesList(searchedMovies)
      }

      searchData()
    } else {
      const fetchData = async () => {
        const movies = await getMovieList()
        setMoviesList(movies)
      }
  
      fetchData()
    }
  }

  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovieList()
      setMoviesList(movies)
    }

    fetchData()
  }, [])

  console.log(moviesList);

  const MoviesListDisplay = () => {
    return moviesList.map((movie, i) => {
      return (
        <div className='bg-zinc-800 rounded-md w-20 md:w-50 h-50 md:h-105 lg:h-110' key={i}>
          <img className='rounded-tl-md rounded-tr-md' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Poster film" />
          <div className='text-xs md:text-md lg:text-lg text-white font-semibold mt-2'>{movie.title}</div>
          <div className='text-xs md:text-md lg:text-lg text-zinc-500'>{movie.release_date}</div>
          <div className='text-xs md:text-md lg:text-lg text-white'>{movie.vote_average}</div>
        </div>
      )
    })
  }

  return (
    <>
      <div>
        <h1 className="font-bold text-white text-4xl">Web Film</h1>
        <input type="text" onChange={({ target }) => search(target.value)} className="bg-zinc-800 rounded-md w-72 px-3 py-2 text-white shadow-none focus:outline-none mt-5 " placeholder='Cari film...' />

        <div className='flex-wrap flex gap-4 sm:gap-10 items-center justify-center mt-10'>
          <MoviesListDisplay />

        </div>

      </div>
    </>
  )
}

export default App
