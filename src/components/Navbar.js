import React from "react";
import navlogo from "./images/navlogo.png";
// import background from "./images/background.jpg"


export default function Navbar() {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">
          <div className="container-fluid">
            <a className="navbar-brand" href=" /">
              <img src={navlogo} alt="" />
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
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto">
                <a
                  className="nav-link active mx-4"
                  aria-current="page"
                  href= "/"
                >
                  Home
                </a>
                <a className="nav-link mx-4" href="/about-us">
                  About Us
                </a>
                <a className="nav-link mx-4" href="#services">
                  Services
                </a>
                <a className="nav-link mx-4" href="#whitepaper">
                  Whitepaper
                </a>
                {/* <a className="nav-link mx-4" href="#faq">
                  FAQ
                </a> */}
                <a className="nav-link mx-4" href="#roadmap">
                  Roadmap
                </a>
                <a className="nav-link mx-4" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* <div className="background-image">
          <img src={background} alt="" className="background" />
        </div> */}
        </nav>
      </section>
    </div>
  );
}
