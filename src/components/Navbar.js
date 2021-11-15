import React from "react";
import {Link} from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" offset={-50} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-50} className="nav-link" href="#">Over mij</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-50} className="nav-link" href="#">Diensten</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-50} className="nav-link" href="#">Ervaring</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-50} className="nav-link" href="#">Projecten</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="contacts" className="nav-link" href="#">contact</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
