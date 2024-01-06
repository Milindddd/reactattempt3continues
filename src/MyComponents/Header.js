import React from 'react'

export default function header(props) {
  return (
    <nav ClassName="navbar navbar-expand-lg bg-body-tertiary">
    <div ClassName="container-fluid">
      <a ClassName="navbar-brand" href="#">{props.title}</a>
      <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span ClassName="navbar-toggler-icon"></span>
      </button>
      <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
        <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
          <li ClassName="nav-item">
            <a ClassName="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link" href="#">Home</a>
          </li>
        
        </ul>
        <form ClassName="d-flex" role="search">
          <input ClassName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button ClassName="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
 
header.defaultProps = {
  title: "your title here"
}