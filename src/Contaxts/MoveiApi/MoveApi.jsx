// src/Context/MoviesContext.jsx
import React, { createContext, useEffect, useState } from "react"

export const MoviesContext = createContext()

export default function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [watchlist, setWatchlist] = useState(() => {
  const saved = localStorage.getItem("watchlist")
  return saved ? JSON.parse(saved) : []
})
  async function getNowPlayingMovies() {
    try {
      setLoading(true)
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=2f89e271af8feaefe28c4cc91bf57963`
      )
      const data = await response.json()
      setMovies(data.results)
      console.log(data.results)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])

  useEffect(() => {
  localStorage.setItem("watchlist", JSON.stringify(watchlist))
}, [watchlist])

function toggleWatchlist(movie) {
  const exists = watchlist.find(item => item.id === movie.id)

  if (exists) {
    setWatchlist(watchlist.filter(item => item.id !== movie.id))
  } else {
    setWatchlist([...watchlist, movie])
  }
}

  return (
   <MoviesContext.Provider value={{ movies, loading, error, watchlist, toggleWatchlist }}>
      {children}
    </MoviesContext.Provider>
  )
}