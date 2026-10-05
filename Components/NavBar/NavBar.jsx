import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg py-2 " style={{ backgroundColor: "#f9d94a" }}>
  <div className="container  d-flex justify-content-between align-items-center">
   <Link to="" className="text-dark text-decoration-none"> <span className="fw-bold">Movie App</span> </Link> 
    <div className="d-flex align-items-center gap-4">
      <div className="dropdown">
        <a className="text-dark text-decoration-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
          En
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">En</a></li>
          <li><a className="dropdown-item" href="#">Ar</a></li>
        </ul>
      </div>
      <Link  to="/watchlist" className="text-dark text-decoration-none">
        <i className="fa-solid fa-heart me-1"></i> watchlist
      </Link>
    </div>
  </div>
</nav>
    </div>
  )
}
