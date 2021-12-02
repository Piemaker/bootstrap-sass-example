import React from 'react'
import Logo from "../assets/pictures/logo.png"

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav align-items-center">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#companies">
                Companies
              </a>
              <a className="nav-link" href="#services">
                Services
              </a>
              <a className="nav-link active" href="#testimonials">
                testimonials
              </a>
              <a className="nav-link active" href="#faq">
                FAQ
              </a>
              <a className="nav-link active" href="#portfolio">
                portfolio
              </a>
              <a className="nav-link active" href="#getStarted">
                get started
              </a>

              <button type="button" className="rounded-pill btn-rounded">
                +02 12345678{" "}
                <span>
                  <i className="fas fa-phone-alt"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
}
