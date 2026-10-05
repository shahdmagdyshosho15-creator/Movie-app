import React, { useContext, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'

import { MoviesContext } from '../../Contaxts/MoveiApi/MoveApi'

export default function AllMovies() {
  const { movies, loading, error } = useContext(MoviesContext)
  const [currentPage, setCurrentPage] = useState(1)
  const moviesPerPage = 8

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  const totalPages = Math.ceil(movies.length / moviesPerPage)
  const startIndex = (currentPage - 1) * moviesPerPage
  const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage)

  return (
    <div className="container gap-4">
      <h4 className="fw-bold my-4">AllMovies</h4>

      <div className="row g-4">
        {currentMovies.map((movie) => (
          <div className="col-md-4 col-xl-3" key={movie.id}>
            <MovieCard {...movie} />
          </div>
        ))}
      </div>

   {/* ===== Pagination ===== */}
<nav className="mt-5">
  <ul className="pagination justify-content-center gap-2">
    <li className="page-item">
      <button
        type="button"
        className="page-link border-0 rounded-circle shadow-none d-flex align-items-center justify-content-center"
        style={{ width: "38px", height: "38px" }}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    </li>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <li className="page-item" key={page}>
        <button
          type="button"
          className="page-link border-0 rounded-circle shadow-none fw-bold d-flex align-items-center justify-content-center"
          style={{
            width: "38px",
            height: "38px",
            backgroundColor: currentPage === page ? "#f9d94a" : "transparent",
            color: currentPage === page ? "#000" : "#6c757d",
          }}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      </li>
    ))}

    <li className="page-item">
      <button
        type="button"
        className="page-link border-0 rounded-circle shadow-none d-flex align-items-center justify-content-center"
        style={{ width: "38px", height: "38px" }}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </li>
  </ul>
</nav>
    </div>
  )
}