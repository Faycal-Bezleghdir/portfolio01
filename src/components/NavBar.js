import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Maison</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/projets">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          </li>

        <li>
          <Link to="/temoignages">Témoignages</Link>
        </li>
        <li>
          <Link to="/temoignages/ajouter">Ajouter Témoignage</Link>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;
