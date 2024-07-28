import React from 'react'

const NavBar = () => {
  return (
    <div>
            

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Blog App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/create">Create a post</a>
        <a class="nav-link" href="/viewall">View All</a>
        <a class="nav-link" href="/viewmypost">View My Post</a>
        
      </div>
    </div>
  </div>
</nav>



    </div>
  )
}

export default NavBar