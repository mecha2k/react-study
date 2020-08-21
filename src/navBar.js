import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { StyleNav, GlobalStyles } from "./App.styled"

function NavBar(props) {
  return (
    <>
      <GlobalStyles />
      <StyleNav>
        <div className="navbar-logo">
          <i className="fab fa-accusoft"></i>
          <Link to="#" className="link">
            DreamCoding
          </Link>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="link">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/wedding" className="link">
              Wedding
            </Link>
          </li>
          <li>
            <Link to="/booking" className="link">
              Booking
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
        <div className="navbar-icons">
          <ul>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-facebook-square"></i>
            </li>
            <li>
              <FontAwesomeIcon icon={faBars} />
            </li>
          </ul>
        </div>
      </StyleNav>
    </>
  )
}

export default NavBar
