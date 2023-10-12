import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <Link class="navbar-brand fs-1 fst-italic" to="/">GOFORFOOD</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active fs-4" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link fs-4" to="/login">Login</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link fs-4" to="/createuser">Signup</Link>
        </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>

  )
}
