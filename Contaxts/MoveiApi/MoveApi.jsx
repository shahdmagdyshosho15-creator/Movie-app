// src/Context/MoviesContext.jsx
import React, { createContext, useEffect, useState } from "react"

export const MoviesContext = createContext()

export default function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  return (
    <MoviesContext.Provider value={{ movies, loading, error }}>
      {children}
    </MoviesContext.Provider>
  )
}