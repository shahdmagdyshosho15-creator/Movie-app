import React from 'react'
import {  NavLink, Navigate, Outlet } from 'react-router-dom'
  

import { useNavigate } from 'react-router-dom'

export default function Home() {
   const navigate = useNavigate()
  return (
    <>
      <div className="py-5" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h2 className="fw-bold">Welcome to our movie app</h2>
          <p className="text-muted">Millions of movies, TV shows and people to discover. Explore now.</p>

          <div className="d-flex mt-4 w-100">
            <input
           
              type="text"
              className="form-control rounded-start-pill border-0 shadow-sm px-4 py-2"
              placeholder="Search and explore...."
            />
            <button  onClick={()=>{
             navigate("/searhResults")
            }} className="btn rounded-end-pill fw-bold px-4" style={{ backgroundColor: "#f9d94a" }}>
              Search
            </button>
          </div>
        </div>
      </div>

<nav className="mt-3">
  <ul className="d-flex list-unstyled gap-4 container py-2 mb-0">
    <li>
      <NavLink
        to=""
        end
        className={({ isActive }) =>
          `text-decoration-none fw-semibold pb-1 ${
            isActive ? "text-dark border-bottom border-warning border-2" : "text-secondary"
          }`
        }
      >
        Movies
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/tvshows"
        className={({ isActive }) =>
          `text-decoration-none fw-semibold pb-1 ${
            isActive ? "text-dark border-bottom border-warning border-2" : "text-secondary"
          }`
        }
      >
        TV Shows
      </NavLink>
    </li>
  </ul>
</nav>
      <Outlet/>
    </>
  )
}