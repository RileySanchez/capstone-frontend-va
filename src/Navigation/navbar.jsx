import "./navbar.css";
import React from "react";
import { Link as LinkS } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navigation-container">
      <LinkS className="navigation-logo" to="/">
        <h2>Veteran Resources</h2>
      </LinkS>
      <ul className="navigation-link">
        <li className="nav-item">
          <LinkS className="nav-link" to="/">
            Home
          </LinkS>
        </li>
        <li className="nav-item">
          <LinkS className="nav-link" to="/mentalhealth">
            Mental Health
          </LinkS>
        </li>
        <li className="nav-item">
          <LinkS className="nav-link" to="/varesources">
            VA Resources
          </LinkS>
        </li>
        <li className="nav-item">
          <LinkS className="nav-link" to="/standdown">
            Stand Down
          </LinkS>
        </li>
      </ul>
    </div>
  );
}
