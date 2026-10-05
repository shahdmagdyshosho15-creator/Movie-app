import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function TVCard({
  id,
  name,
  first_air_date,
  poster_path,
  vote_average
}) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div>
      <div className="card m-2 border-0 shadow-sm position-relative h-100">

        <button
          className="btn btn-sm btn-light rounded-circle position-absolute top-0 end-0 m-2 p-1 z-3"
          style={{ width: "28px", height: "28px" }}
        >
          <i className="fa-solid fa-ellipsis text-dark"></i>
        </button>

        <Link to={`/tvshowsDetails/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            className="card-img-top"
            alt="tv show poster"
            style={{ height: "230px", objectFit: "cover" }}
          />
        </Link>

        <span
          className="position-absolute rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
          style={{
            bottom: "70px",
            left: "10px",
            width: "38px",
            height: "38px",
            backgroundColor: "#0f4c3a",
            fontSize: "12px"
          }}
        >
          {vote_average ? vote_average.toFixed(1) : "0.0"}
        </span>

        <div className="card-body px-2 pt-3 pb-2">
          <Link to={`/tvshowsDetails/${id}`} className="text-decoration-none text-dark">
            <p className="mb-1 fw-semibold small text-truncate">{name}</p>
          </Link>

          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted" style={{ fontSize: "12px" }}>
              {first_air_date}
            </span>

            <button
              className="border-0 bg-transparent p-0"
              onClick={(e) => {
                e.stopPropagation()
                setIsFavorite(!isFavorite)
              }}
            >
              <i
                className="fa-solid fa-heart"
                style={{
                  color: isFavorite ? "#f9d94a" : "#e0e0e0",
                  cursor: "pointer"
                }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}