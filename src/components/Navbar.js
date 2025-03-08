import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJGzyLp0YOz7ui2oTZOxX67DsUoZ9d6aljQ&s"
            alt="Logo"
            width="80"
            height="80"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#top">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-us">Contact</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
